import React, { Component } from 'react';
import {Card, Button,Icon} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import {Link} from '../routes';

const src = '/images/wireframe/white-image.png'

const divStyle1 = {
    border: '10px outset rgb(255, 170, 128)',
    backgroundColor:'rgb(128, 0, 0)',
    marginTop:'20px'
  };
class CampaignIndex extends Component{

    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return {campaigns};
    }

    renderCampaigns(){
        const items=this.props.campaigns.map(address=>{
           
            return{ 
               header:address,
               description:(
                   <Link route={`/campaigns/${address}`}>    
               <a> <Button color="black" floated="left" basic animated >
                               <Button.Content visible>Campaign Details</Button.Content>
                                <Button.Content hidden>
                                <Icon name='folder open' />
                                </Button.Content>
                            </Button></a>
               </Link>
               ),
               fluid:true,
               meta: 'Campaign Address'
            };
        });
        
        return <Card.Group style={divStyle1} items={items}/>;
    }
    render(){
    return( 
        <Layout>
    <div>
        
        <h1 style={{ fontFamily:"serif",color:"white", marginTop:50, marginBottom:30}}> <center> Welcome to CrowFund </center></h1>
       
       <Link route="/campaigns/new">

            <div class="ui animated fade button">
            <div class="visible content">
                {/* <h4 style={{color:"blue", marginTop:10, marginBottom:10}} > Create New Campaign</h4> */}
                <button class="ui inverted brown button">Create New Campaign</button>
                </div>
            <div class="hidden content">
               

                <button class="ui inverted red button">Think Innovatively </button>
            </div>
            </div>
     
          </Link>
          <br/>
          <br/>
{this.renderCampaigns()}
       
        </div>
        </Layout>
        );
    }
}
export default CampaignIndex;