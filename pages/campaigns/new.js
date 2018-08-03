import React from 'react';
import Layout from '../../components/Layout';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';
import BackButton from '../../components/BackButton';

class CampaignNew extends React.Component {
	state = {
		minContribution: '',
		duration: '',
		hardCap: '',
		errorMessage: '',
		loading: false
	};

	onSubmit = async (event) => {
		event.preventDefault();
		
		const accounts = await web3.eth.getAccounts();
		const days = this.state.duration;
		const seconds = days * 24 * 60 * 60;

		this.setState({ loading: true, errorMessage: '' });
		
		try {
			await factory.methods
				.createCampaign(this.state.minContribution, 
								seconds,
								web3.utils.toWei(this.state.hardCap, 'ether'))
				.send({
					from: accounts[0]
				});

			Router.pushRoute('/index');
		} catch(err) {
			this.setState({ errorMessage: err.message });
		}

		this.setState({ loading: false });	
	}

	render() {
		return (
			<Layout>
				<BackButton route={'/'} />
				<h3>Create a new Campaign</h3>

				<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
				    <Form.Field style={{width: '35%'}}>
				    	<label>Minimal Contribution: </label>
				    	<Input
							value={this.state.minContribution}
				    		label="wei"
				    		labelPosition="right" 
				    		onChange={(event) => {this.setState({ minContribution: event.target.value })}}
				    	/>
				    </Form.Field>
				    <Form.Field style={{width: '35%'}}>
				    	<label>Duration: </label>
				    	<Input
							value={this.state.duration}
				    		label="days"
				    		labelPosition="right" 
				    		onChange={(event) => {this.setState({ duration: event.target.value })}}
				    	/>
				    </Form.Field>
				    <Form.Field style={{width: '35%'}}>
				    	<label>Hard Cap: </label>
				    	<Input
				    		value={this.state.hardCap}
				    		label="ETH"
				    		labelPosition="right" 
				    		onChange={(event) => {this.setState({ hardCap: event.target.value })}}
				    	/>
				    </Form.Field>

				    <Message 
				    	error
				    	header="Oops!"
				    	content={this.state.errorMessage}
				    />

				    <Button primary loading={this.state.loading}>Create</Button>
				</Form>

				
			</Layout>
		)
	}
}

export default CampaignNew;