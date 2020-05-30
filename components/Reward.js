import React, { Component } from "react";
import web3 from "../ethereum/web3";
import {Button} from 'semantic-ui-react';
import Campaign from "../ethereum/campaign";
import { Router } from "../routes";
class Reward extends Component {
  state = {

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

  payWinner = async ()=>{
  //   event.preventDefault();
  //   const campaign = Campaign(this.props.address);
  //   this.setState({ loading: true, errorMessage: "" });

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
        winner: addresss.replace(",","\n"),
      });
    } catch (err) {
      this.setState({
        hidden: true,
        winner: "not found",
      });
    }
  };

  render() {
    const style = {
      color: "white",
    };
    return (
      <div>
      <br/>
        <center>
        <h3 style={style}>The Address of the Campaign is {this.props.address}.
        </h3></center>
      </div>
    );
  }
}

export default Reward;
