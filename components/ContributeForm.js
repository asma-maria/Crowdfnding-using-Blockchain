import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from "../routes";
import Reward from "./Reward";

class CortributeForm extends Component {
  state = {
    value: "",
    errorMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const campaign = Campaign(this.props.address);

    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether"),
      });
      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false, value: "" });
  };
  render() {
    return (
      <div>

      
      <Reward
      address={this.props.address}
      contributors={this.props.contributors}
    />
    <br/>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <center><h2 style={{ fontFamily:'sarif', color: "white" }}>Amount to Contribute</h2></center>
            <br/>
            <Input
              label="ether"
              labelPosition="right"
              value={this.state.value}
              onChange={(event) => this.setState({ value: event.target.value })}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button inverted color="yellow" fluid basic animated="fade">
            <Button.Content visible>Contribute!</Button.Content>
            <Button.Content hidden>Confirm?</Button.Content>
          </Button>
        </Form>

      </div>
    );
  }
}

export default CortributeForm;
