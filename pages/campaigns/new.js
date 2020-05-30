import React, {Component} from 'react';
import Layout from '../../components/Layout';
import { Button, Form, Input,Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web from '../../ethereum/web3';
import {Router} from '../../routes';

class CampaignNew extends Component{

    state = {
        title:'',
        purpose:'',
        challange:'',
        minimumContribution:'',
        errorMessage : '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({loading: true, errorMessage: ''});
        try{
            const accounts = await web.eth.getAccounts();
            await factory.methods
                .createCampaign(this.state.title,this.state.purpose,this.state.challange,this.state.minimumContribution)
                .send({
                    from: accounts[0]
                });

            Router.pushRoute('/');
        }catch(err){
            this.setState({ errorMessage: err.message });
        }
        this.setState({loading: false});

    }
    render(){
        return(
            <Layout>
           <center> <h2 style={{ fontFamily:"serif",color:"white", marginTop:20, marginBottom:20}}>Create a Campaign</h2></center>


                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                    <h3  style={{ fontFamily:"serif",color:"white", marginTop:20, marginBottom:20}}>Title of Campaign</h3>
                    <Input value={this.state.title}
                        onChange={event=>this.setState({title: event.target.value})}/>
                    </Form.Field>
                    <Form.Field>
                    <h3 style={{ fontFamily:"serif",color:"white", marginTop:20, marginBottom:20}}>Purpose </h3>
                    <Input value={this.state.purpose}
                        onChange={event=>this.setState({purpose: event.target.value})}/>
                    </Form.Field>
                    <Form.Field>
            <h3 style={{ fontFamily:"serif",color:"white", marginTop:20, marginBottom:20}}>Challenge</h3>
                    <Input value={this.state.challange}
                        onChange={event=>this.setState({challange: event.target.value})}/>
                    </Form.Field>
                    <Form.Field>
                    <h3 style={{ fontFamily:"serif",color:"white", marginTop:20, marginBottom:20}}>Minimum Contribution</h3>
                        <Input
                            label="Wei" type="number" labelPosition="right" value={this.state.minimumContribution}
                            onChange={event=> this.setState({minimumContribution: event.target.value})} />
                    </Form.Field>

                    <Message error header = "Oops!" content = {this.state.errorMessage} />


                    <Button color="red" loading={this.state.loading} fluid  animated>Create</Button>
                </Form>
            </Layout>
        );
    }
}

export default CampaignNew;