import React,{Component} from 'react';
import Layout from '../../../components/Layout';
import {Button,Table,Icon} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';


class RequestIndex extends Component{

    static async getInitialProps(props){
        const {address}=props.query;
        const campaign=Campaign(address);
        const requestCount= await campaign.methods.getRequestsCount().call();
        const approversCount=await campaign.methods.approversCount().call();
        const requests = await Promise.all(
            Array(parseInt(requestCount)).fill().map((element, index) => {
                return campaign.methods.requests(index).call()
            })
           
       );

       //console.log(requests);

        return {address,requests,requestCount,approversCount};
    }

    renderRows(){

        return this.props.requests.map((request,index)=>{

            return (<RequestRow
            
            key={index}
            id={index}
            request={request}
            address={this.props.address}
            approversCount={this.props.approversCount}
            
            />
            )

        });
    }

    render(){

        const{Header,Row,HeaderCell,Body}=Table;
        return (
        
        <Layout >
        <br/>
        <center><h3 style={{ fontFamily:' serif',color:"white",border: '5px outset rgb(165,42,42)'}}> Requests List</h3></center>
         <br/>   
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
        <a>
        <Button inverted color="red" style={{marginBottom: 20}} floated="right" animated>
                        <Button.Content visible>Add Request</Button.Content>
                            <Button.Content hidden>
                            <Icon name='list' />
                        </Button.Content>
         </Button>
        </a>


        </Link>
        <Table>
            <Header>
                <Row>
                    <HeaderCell>ID </HeaderCell>
                    <HeaderCell>Description</HeaderCell>
                    <HeaderCell>Amount </HeaderCell>
                    <HeaderCell>Recipient </HeaderCell>
                    <HeaderCell><center>Approval Count</center> </HeaderCell>
                    <HeaderCell>Approve </HeaderCell>
                    <HeaderCell>Finalize</HeaderCell>
                </Row>
            </Header>
            <Body>
                {this.renderRows()}
            </Body>
        </Table>
        <div>
        <br/>
        <center><h3 style={{ fontFamily:' serif',color:"white",border: '5px outset rgb(46,139,87)'}}> Found {this.props.requestCount} request</h3>
        </center></div>
        
        <Link route={`/campaigns/${this.props.address}/`}>
            <a>
            <Button style={{marginTop: 20}} inverted color="blue"  floated="right" animated>
                        <Button.Content visible>Go back to details</Button.Content>
                            <Button.Content hidden>
                            <Icon name='arrow left' />
                        </Button.Content>
             </Button>

            </a>
                    
         </Link>
        </Layout>
        );
    }
}

export default RequestIndex;