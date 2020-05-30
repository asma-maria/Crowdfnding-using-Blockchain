pragma solidity ^0.4.17;


contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(string title,string purpose,string challange,uint256 minimum) public {
        address newCampaign = new Campaign(title,purpose,challange,minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}


contract Campaign {
    // struct is a collection of keyvalue pair that can have different type
    struct Request {
        string description;
        uint256 value;
        address recipient;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvals;
    }

    address public manager;
    uint256 public minimumContribution;
    Request[] public requests;
    mapping(address => bool) public approvers;
    uint256 public approversCount;
    address[] public contributers;
    address public winner;
    uint public index;
    string public title;
    string public purpose;
    string public challange;

    // modifiers
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campaign(string tit,string pur,string chall,uint256 min, address creator) public {
        manager = creator;
        minimumContribution = min;
        title = tit;
        purpose = pur;
        challange = chall;

    }

    function random() private view returns (uint256) {
        return uint256(keccak256(block.difficulty,now,contributers));
    }
    function showAddress() public view returns (address[]) {
        return contributers;
    }

    function showWinnerAddress() public view returns (address) {
        index = random()%contributers.length;
        return contributers[index];
    }
    // function payWinner() public restricted {
        
        
    //     contributers[index].transfer(this.balance);
    // }

    // when someone wants to send money, mark as payable
    // msg.value is in wei

    function contribute() public payable {
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;
        contributers.push(msg.sender);
        approversCount++;
    }

    function createRequest(string description, uint256 value, address recipient)
        public
        restricted
    {
        Request memory request = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });

     

        requests.push(request);
    }

    function approveRequest(uint256 index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint256 indexx) public {
        Request storage request = requests[indexx];

        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary()
        public
        view
        returns (string,string,string,uint256, uint256, uint256, uint256, address)
    {
        return (
            title,
            purpose,
            challange,
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint256) {
        return requests.length;
    }
}
