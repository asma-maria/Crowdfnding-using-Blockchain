import React, { Component } from "react";
import Layout from '../../../components/Layout';
import ContributeForm from '../../../components/ContributeForm';
import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";
import { Router } from "../../../routes";

class CForm extends Component{

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

  render(){

    return (
      <Layout>
      <ContributeForm address={this.props.address}
      contributors={this.props.approversCount}
      manager={this.props.manager}
      />
      </Layout>
      );
  }

} 

export default CForm;
