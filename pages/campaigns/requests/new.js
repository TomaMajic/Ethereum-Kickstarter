import React from 'react';
import Layout from '../../../components/Layout';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import BackButton from '../../../components/BackButton';

class RequestNew extends React.Component {
	state = {
		amount: '',
		recipient: '',
		description: '',
		errorMessage: '',
		loading: false
	}

	static async getInitialProps(props) {
		const address = props.query.address;
		const campaign = Campaign(address);

		return { address, campaign };
	}

	onSubmit = async (event) => {
		event.preventDefault();
		const campaign = this.props.campaign;
		const accounts = await web3.eth.getAccounts();

		this.setState({ loading: true, errorMessage: '' });

		try {
			await campaign.methods
				.createRequest(
					web3.utils.toWei(this.state.amount),
					this.state.recipient,
					this.state.description
				)
				.send({
					from: accounts[0]
				});

			Router.pushRoute(`/campaigns/${this.props.address}/requests`);
		} catch(err) {
			this.setState({ errorMessage: err.message });
		}

		this.setState({ loading: false });
	}

	render() {
		return(
			<Layout>
				<BackButton route={`/campaigns/${this.props.address}/requests`}/>
				<h3>New Request for {this.props.address}</h3>

				<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
					<Form.Field style={{width: '35%'}}>
						<label>Amount to spend:</label>
						<Input 
							value={this.state.amount}
							label="ETH"
							labelPosition="right"
							onChange={(event) => {this.setState({amount: event.target.value})}}
						/>
					</Form.Field>
					<Form.Field style={{width: '35%'}}>
						<label>Recipient Address:</label>
						<Input 
							value={this.state.recipient}
							placeholder="Address.."
							onChange={(event) => {this.setState({recipient: event.target.value})}}
						/>
					</Form.Field>
					<Form.Field style={{width: '35%'}}>
						<label>Description:</label>
						<Input 
							value={this.state.description}
							placeholder="Reason for creation.."
							onChange={(event) => {this.setState({description: event.target.value})}}
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
		);
	}
}

export default RequestNew;