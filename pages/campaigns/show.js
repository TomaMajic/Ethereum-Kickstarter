import React from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';
import BackButton from '../../components/BackButton';

class CampaignShow extends React.Component {

	static async getInitialProps(props) {
		const campaign = Campaign(props.query.address);
		const summary = await campaign.methods.getSummary().call();

		return { 
			balance: summary["balance"], 
			minContribution: summary["minContribution"], 
			requestCount: summary["requestCount"], 
			contributorsCount: summary["contCount"],
			owner: summary["campaignOwner"],
			address: props.query.address
		};
	}

	renderSummary = () => {
		const items = [
			{ 
				header: this.props.owner,
				description: 'The address of the owner of this campaign',
				meta: 'Owner',
				style: {overflowWrap: 'break-word'}
			},
			{ 
				header: web3.utils.fromWei(this.props.balance, 'ether'),
				description: 'Total amount of ETH collected in the campaign',
				meta: 'Balance'
			},
			{ 
				header: this.props.minContribution,
				description: 'Minimal contribution for this campaign',
				meta: 'Minimal Contribution (wei)'
			},
			{ 
				header: this.props.contributorsCount,
				description: 'Total number of contributors',
				meta: 'Contributors Count'
			},
			{ 
				header: this.props.requestCount,
				description: 'Total number of spending requests made by owner',
				meta: 'Requests Count'
			},
		]

		return <Card.Group items={items} />
	}

	render() {
		return (
			<Layout>
				<BackButton route={'/'} />
				<h3>Campaign {this.props.address}</h3>

				<Grid>
					<Grid.Column width={10}>
						{this.renderSummary()}

						<Link route={`/campaigns/${this.props.address}/requests`}>
							<Button primary style={{marginTop: '10px'}}>View Requests</Button>
						</Link>
					</Grid.Column>

					<Grid.Column width={6}>
						<ContributeForm address={this.props.address}/>
					</Grid.Column>
				</Grid>

			</Layout>
		);
	}
}

export default CampaignShow;