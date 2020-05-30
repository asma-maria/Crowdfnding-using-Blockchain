import React, { Component } from "react";
import web3 from "../ethereum/web3";
import {Button,Grid,Card, Container,Icon} from 'semantic-ui-react';
import Campaign from "../ethereum/campaign";
import { Link, Router } from "../routes";
class Winner extends Component {
  state = {
    list:"",
    winner: "",
    hidden: true,
    errorMessage: "",
    loading: false,
    value: ""
  };

  async componentDidMount(){
    const manager = await campaign.methods.manager().call();
    //const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(campaign.options.address);

    this.setState({manager,contributers, balance});

  }

  // selectWinner = async (event) => {
  //   const campaignn = Campaign(this.props.address);
  //   try {
  //     await campaignn.methods.pickWinner().call();
  //   } catch (err) {
  //     this.setState({
  //       winner: "Cannot select winner",
  //     });
  //   }
  // };

  payWinner = async ()=>{
  //   event.preventDefault();
  //   const campaign = Campaign(this.props.address);
  //   this.setState({ loading: true, errorMessage: "" });

  //   try {
  //     const accounts = await web3.eth.getAccounts();
  //     await campaign.methods.payWinner().send({
  //       from: accounts[0],
  //       value: web3.utils.toWei(this.state.value, "ether"),
  //     });
  //     Router.replaceRoute(`/campaigns/${this.props.address}`);
  //   } catch (err) {
  //     this.setState({ winner: err.message });
  //   }
  //   //this.setState({winner: "Sent" });
   
  // this.setState({ loading: false, value: "" });

  const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Waiting on transaction success...'});

    await campaign.methods.contribute().send({
      from : accounts[0]
    });

    this.setState({ message: 'A winner has been picked'});
  }

  showWinner = async (event) => {
    const campaignn = Campaign(this.props.address);
    try {
      const winnerAddress = await campaignn.methods.showWinnerAddress().call();
      console.log(winnerAddress);
      const addresss = String(winnerAddress);

      this.setState({
        winner: addresss.split(",").join(" "),
      });
    } catch (err) {
      this.setState({
        hidden: true,
        winner: "not found",
      });
    }
  };
  showAddress = async (event) => {
    const campaignn = Campaign(this.props.address);
    try {
      const winnerAddress = await campaignn.methods.showAddress().call();
      //console.log(winnerAddress);
      const addresss = String(winnerAddress);

      this.setState({
        list: addresss.split(",").join(" Address:")
      // list:addresss.replace(/,/gi,"\n")
      });
    } catch (err) {
      this.setState({
        hidden: true,
        list: "not found",
      });
    }
  };

  render() {
    const style = {
      color: "white",
      wrap:"hard" 
    };

    const style1 = {
      color: "white",
      border: '10px outset rgb(255, 153, 153)',
   
    backgroundColor:'rgb(255, 102, 102)',
    wrap:"hard"
  
    };
    const divStyle2 = {
      border: '5px solid rgb(179, 0, 0)',
      color: 'green',
      fontSize: '30px',
      fontFamily:' serif'
    };

    const divStyle3 = {
      border: '2px solid rgb(255, 190, 153)',
      color: 'white',
      fontSize: '25px',
      //backgroundColor:'black',
      fontFamily:' serif'
    };
    return (
      
      <Container>
      <div >
      <br/>
         <center><h1 style={divStyle3}>Reward</h1></center>
        <br/>
         <Button inverted color='blue' style={{marginBottom: 20}} onClick={this.showWinner} floated="right" animated>
                        <Button.Content visible>Show Winner Address</Button.Content>
                            <Button.Content hidden>
                            <Icon name='map' />
                        </Button.Content>
          </Button>
         
         <Button inverted color='green' style={{marginBottom: 20}} onClick={this.showAddress} floated="left" animated>
              <Button.Content visible> Campaign Address List</Button.Content>
                            <Button.Content hidden>
                            <Icon name='file' />
                </Button.Content>
          </Button>
        

        <center><h2 style={{ fontFamily:' serif',color:"white"}}>There are {this.props.contributors} contributors.
        </h2></center>
        <br></br>
        <center>
        <h3 style={{ fontFamily:'serif',color:"white"}}>The Address of the Campaign is {this.props.address}
        </h3></center>
        <h3 style={{ fontFamily:' serif',color:"white",border: '5px outset rgb(165,42,42)'}}>{this.state.winner}</h3>
           <h2 style={{ fontFamily:'serif',color:"white"}}>Congratulations!!You will get a Reward from Manager of this Campaign</h2>
            <h2 style={{ fontFamily:' serif',color:"white"}}>The List of the addresses of this campaign:</h2>
           <h3 style={{ fontFamily:' serif',color:"white",border: '5px outset rgb(165,42,42)'}}>{this.state.list}</h3>

           <Link route={`/campaigns/${this.props.address}/`}>
            <a>
            <Button color="blue" basic style={{marginTop: 20}} animated>
                        <Button.Content visible>Go back to details</Button.Content>
                            <Button.Content hidden>
                            <Icon name='arrow left' />
                        </Button.Content>
             </Button>

            </a>
                    
         </Link>
     
      </div>
      </Container>
     
    );
  }
}

export default Winner;
