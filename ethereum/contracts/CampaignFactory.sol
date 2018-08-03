pragma solidity ^0.4.23;

import './Campaign.sol';

contract CampaignFactory {

	address[] public campaigns;

	function createCampaign(uint256 _minContribution, 
							uint256 _duration,
							uint256 _hardCap) 
	external {
		address campaign = new Campaign(_minContribution, _duration, _hardCap, msg.sender);
		campaigns.push(campaign);
	}

	function getCampaigns() external view returns(address[]) {
		return campaigns;
	}	
}
