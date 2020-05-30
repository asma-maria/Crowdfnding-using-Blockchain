import React, {Component} from 'react';
import {Form, Button, Message, Input,Icon} from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import {Link, Router} from '../../../routes';
import Layout from '../../../components/Layout';

class RequestNew extends Component{
    state = {
        value: '',
        description: '',
        recipient: '',
        loading: false,
        errorMessage: ''
    };

    static async getInitialProps(props){
        const {address} = props.query;
        return {address};
    }

    onSubmit = async event => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);
        // const {description, value, recipient} = this.state;

        this.setState({loading:true, errorMessage:''});
        try{
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(this.state.description, web3.utils.toWei(this.state.value,'ether'),
             this.state.recipient).send({
                from: accounts[0]
            });

            Router.pushRoute(`/campaigns/${this.props.address}/requests`);
        }catch(err){
            this.setState({errorMessage: err.message});
        }
        this.setState({loading:false});


    };

    render(){
        return(
            <Layout>
               <br/>
                <center><h3 style={{ fontFamily:' serif',color:"white",border: '5px outset rgb(46,139,87)'}}>Create a New Request</h3></center>
                <br/>
                <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                <Button inverted color="red" style={{marginBottom: 20}} floated="right" animated>
                                <Button.Content visible>Back To List</Button.Content>
                                    <Button.Content hidden>
                                    <Icon name='list' />
                                </Button.Content>
                 </Button>
                </a>
                </Link>
               
                <Form error={!!this.state.errorMessage} onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label style={{color:"white"}}>Description</label>
                        <Input value={this.state.description}
                            onChange={event=>this.setState({description: event.target.value})}/>
                    </Form.Field>
                    <Form.Field>
                        <label style={{color:"white"}}>Value in Ether</label>
                        <Input value={this.state.value}
                            onChange={event=>this.setState({value: event.target.value})}/>
                    </Form.Field>
                    <Form.Field>
                        <label style={{color:"white"}}>Recipient</label>
                        <Input value={this.state.recipient}
                            onChange={event=>this.setState({recipient: event.target.value})}/>
                    </Form.Field>
                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button  color={"red"} loading={this.state.loading} fluid animated >
                    <Button.Content visible>Create!</Button.Content>
                            <Button.Content hidden>
                             Ready!
                        </Button.Content>
                   
                    </Button>
                </Form>
            </Layout>

        );
    }
}

export default RequestNew;