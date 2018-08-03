import React from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends React.Component {

	static async getInitialProps() {
		const campaigns = await factory.methods.getCampaigns().call();

		return { campaigns }
	}

	renderCampaigns() {
		const items = this.props.campaigns.map((campaign) => {
			let link = <Link route={`/campaigns/${campaign}`}><a>View Campaign</a></Link>;

			return {
				header: campaign,
				description: link,
				fluid: true
			}
		})

		return <Card.Group items={items} />;
	}

	render() {
		return (
			<Layout>
				<div>
					<h3>Open Campaigns</h3>

					<Link route="/campaigns/new">
						<Button 
							floated='right'
							content='Create campaign' 
							icon='add' 
							labelPosition='right'
							primary
						/>
					</Link>
					{this.renderCampaigns()}
				</div>
			</Layout>
		)
	}
}

export default CampaignIndex;