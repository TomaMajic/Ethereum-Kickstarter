import React from 'react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Router } from '../routes';

class ContributeFrom extends React.Component {
	state = {
		value: '',
		loading: false,
		errorMessage: ''
	}

	onSubmit = async (event) => {
		event.preventDefault();
		const address = this.props.address;
		const campaign = Campaign(address);
		const accounts = await web3.eth.getAccounts();

		this.setState({ loading: true, errorMessage: '' });
		
		try {
			await campaign.methods
				.contribute()
				.send({
					from: accounts[0],
					value: web3.utils.toWei(this.state.value, 'ether')
				});

				Router.replaceRoute(`/campaigns/${address}`);
		} catch(err) {
			this.setState({ errorMessage: err.message });
		}

		this.setState({ loading: false, value: '' });	
	}

	render() {
		return (
			<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
				<Form.Field>
					<label>Contribution: </label>
					<Input
						value={this.state.value}
						label="ETH"
						labelPosition="right"
						onChange={(event) => {this.setState({ value: event.target.value })}} 
					/>
				</Form.Field>

				<Message 
					error
					header="Oops!"
					content={this.state.errorMessage}
				/>

				<Button primary loading={this.state.loading}>Contribute</Button>
			</Form>
		);
	}
}

export default ContributeFrom;