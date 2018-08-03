const Factory = artifacts.require("./CampaignFactory.sol");
const Campaign = artifacts.require("./Campaign");
const CampaignJson = require('../build/contracts/Campaign.json');

contract('Campaign', async (accounts) => {
	let factory;
	let campaignAddress;
	let campaign;

	beforeEach('initialize contracts', async () => {
		factory = await Factory.new();
		await factory.createCampaign(100, 10 * 10**20, web3.toWei(20, 'ether'));
		[campaignAddress] = await factory.getCampaigns();
		campaign = await new web3.eth.contract(CampaignJson.abi).at(campaignAddress);
	});

	it('should return summary', async () => {
		const summary = await campaign.getSummary();
		console.log(summary); 
	});
});