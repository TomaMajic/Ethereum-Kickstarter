import React from 'react';
import Layout from '../../../components/Layout';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import RequestRow from '../../../components/RequestRow';
import BackButton from '../../../components/BackButton';

class RequestIndex extends React.Component {

	static async getInitialProps(props) {
		const address = props.query.address;
		const campaign = Campaign(address);
		const requestCount = await campaign.methods.getRequestsCount().call();
		const contributorsCount = await campaign.methods.contributorsCount().call();

		const requests = await Promise.all(
			Array(parseInt(requestCount)).fill().map((element, index) => {
				return campaign.methods.requests(index).call();
			})
		);

		return { address, campaign, requests, requestCount, contributorsCount }
	}

	renderTableBody = () => {
		return this.props.requests.map((request, index) => {
			return <RequestRow 
				key={index}
				id={index}
				request={request} 
				address={this.props.address}
				contributorsCount={this.props.contributorsCount}
			/>
		});
	}

	render() {
		return(
			<Layout>
				<BackButton route={`/campaigns/${this.props.address}`} />
				<h3>Requests for {this.props.address}</h3>

				<Link route={`/campaigns/${this.props.address}/requests/new`}>
					<Button 
						primary 
						floated='right' 
						style={{marginBottom: '10px'}}
					>
						Create request
					</Button>
				</Link>

				<Table celled padded textAlign={'center'}>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>ID</Table.HeaderCell>
							<Table.HeaderCell>Amount</Table.HeaderCell>
							<Table.HeaderCell>Recipient</Table.HeaderCell>
							<Table.HeaderCell>Description</Table.HeaderCell>
							<Table.HeaderCell>Approval Count</Table.HeaderCell>
							<Table.HeaderCell>Approve</Table.HeaderCell>
							<Table.HeaderCell>Finalize</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{this.renderTableBody()}
					</Table.Body>
				</Table>

				<p>Found {this.props.requestCount + (this.props.requestCount > 1 ? ' Requests.' : ' Request.')}</p>
			</Layout>
		);
	}
}

export default RequestIndex;