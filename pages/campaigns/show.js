import React, { Component } from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import { Card, Grid, Button, Icon,Image, GridRow } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import { Link } from "../../routes";

class CampaignShow extends Component {

  
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();
    // console.log(summary);
    return {
      address: props.query.address,
      title:summary[0],
      purpose:summary[1],
      challange:summary[2],
      minimumContribution: summary[3],
      balance: summary[4],
      requestsCount: summary[5],
      approversCount: summary[6],
      manager: summary[7],
    };
  }
   

  renderCards() {
    const {
      title,
      purpose,
      challange,
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount,
    } = this.props;

    const items = [
      {
        header: manager,
        description:
          <h4>The manager created this campaign and can create requests to withdraw money.
          </h4>,
          meta: "Address of Manager",
        style: { overflowWrap: "break-word" },
      },
      {
        header: title,
        description:
          <h4>Every Campaign Must Belong to a Title that represents the view of the Campaign.</h4>,
        meta: "Address of Manager",
        style: { overflowWrap: "break-word" },
      },
      {
        header: purpose,
        description:
          <h4>Every Campaign shoud have the purpose for the welfare of the world.</h4>,
        meta: "Purpose of The Campaign",  
        style: { overflowWrap: "break-word",color:"black" },
      },
      {
        header: challange,
        description:
          <h4>Creating fund is not very easy task.Some obstacles become challange for the Campaign Creator.</h4>,
        meta: "Challange to Create The Campaign",
        style: { overflowWrap: "break-word" },
      },
      {
        header: minimumContribution,
        description: <h4>Must contribute this much wei to be an approver.</h4>,
        meta: "Minimum Contribution (wei)",
      },
      {
        header: requestsCount,
        description:
          <h4>A request tries to withdraw money from the contract. Requests must be approved by approvers.</h4>,
        meta: "Number of Requests",
      },
      {
        header: approversCount,
        description:
          <h4>Number of people who have aleready donated to this campaign.</h4>,
        meta: "Number of Approvers",
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        description:
          <h4>The balance is how much money this campaign has left to spend.</h4>,
        meta: "Campaign Balance (ether)",
      },
    ];

    return <Card.Group centered items={items} />;
  }

  render() {
    const {
      title,
      purpose,
      challange,
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount,
    } = this.props;
    return (
      <Layout>
        <center><h1 style={{ fontFamily:"serif",color:"white", marginTop:50, marginBottom:30}}>Campaign Show</h1></center>
        <form class='form'></form>
        <Grid>
        <Grid.Row>
              <Grid.Column >
                <Link route={`/campaigns/${this.props.address}/rewards`}>
                  <a>
                    <Button  fluid basic inverted color="teal" animated>
                      <Button.Content visible>Winner of This Campaign</Button.Content>
                      <Button.Content hidden>
                            Own a Gift Hamper from the Manager  
                      </Button.Content>
                    </Button>
                    {/* <Button primary>View Requests</Button> */}
                  </a>
                </Link>
              </Grid.Column>
            </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16} >
           
            {this.renderCards()}
            </Grid.Column>
            <Grid.Row>
              <Grid.Column >
                <Link route={`/campaigns/${this.props.address}/requests`}>
                  <a>
                    <Button  fluid basic inverted color="teal" animated>
                      <Button.Content visible>View Requests</Button.Content>
                      <Button.Content hidden>
                        <Icon name="list" />
                      </Button.Content>
                    </Button>
                    {/* <Button primary>View Requests</Button> */}
                  </a>
                </Link>
              </Grid.Column>
            </Grid.Row>
            <br/>
            <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/contributes`}>
                <a>
                  <Button floated='right'  fluid basic inverted color="teal" animated>
                    <Button.Content visible>Contribute</Button.Content>
                    <Button.Content hidden>
                      Confirm
                    </Button.Content>
                  </Button>
                  {/* <Button primary>View Requests</Button> */}
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid.Row>
        </Grid>
        {/* <Divider vertical>And</Divider> */}
        {/* </Segment> */}
      </Layout>
    );
  }
}

export default CampaignShow;
