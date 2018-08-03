import React from 'react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Button, Table } from 'semantic-ui-react';
import { Router } from '../routes';

class RequestRow extends React.Component {
	state = {
		loadingApprove: false,
		loadingFinalize: false,
		errorMessage: ''
	}

	onApprove = async (event) => {
		event.preventDefault();
		const campaign = Campaign(this.props.address);
		const accounts = await web3.eth.getAccounts();

		this.setState({ loadingApprove: true, errorMessage: '' });

		try {
			await campaign.methods
				.approveRequest(this.props.id)
				.send({from: accounts[0]});

			Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
		} catch(err) {
			this.setState({ errorMessage: err.message });
		}

		this.setState({ loadingApprove: false });
	}


	onFinalize = async (event) => {
		event.preventDefault();
		const campaign = Campaign(this.props.address);
		const accounts = await web3.eth.getAccounts();

		this.setState({ loadingFinalize: true, errorMessage: '' });

		try {
			await campaign.methods
				.finalizeRequest(this.props.id)
				.send({from: accounts[0]});

			Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
		} catch(err) {
			this.setState({ errorMessage: err.message });
		}

		this.setState({ loadingFinalize: false });
	}

	render() {
		const readyToFinalize = this.props.request.approvalCount > this.props.contributorsCount / 2;

		return (
			<Table.Row disabled={this.props.request.complete} positive={readyToFinalize && !this.props.request.complete}>
				<Table.Cell>
					{this.props.id + 1}
				</Table.Cell>
				<Table.Cell >
					{web3.utils.fromWei(this.props.request.amount, 'ether') + ' ETH'}
				</Table.Cell>
				<Table.Cell>
					{this.props.request.recipient}
				</Table.Cell>
				<Table.Cell>
					{this.props.request.description}
				</Table.Cell>
				<Table.Cell>
					{this.props.request.approvalCount}/{this.props.contributorsCount}
				</Table.Cell>
				<Table.Cell>
					{ this.props.request.complete ? null : ( <Button 
						color="green" 
						onClick={this.onApprove} 
						loading={this.state.loadingApprove}
						>
							Approve
						</Button>)
					}
				</Table.Cell>
				<Table.Cell>
					{ this.props.request.complete ? null : (<Button
							primary
							onClick={this.onFinalize}
							loading={this.state.loadingFinalize}
						>
							Finalize
						</Button>)
					}
				</Table.Cell>
			</Table.Row>
		);
	}
}

export default RequestRow;