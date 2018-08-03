import web3 from './web3';
import Factory from './build/contracts/CampaignFactory.json';

const address = '0x68203737e6b51b196c0a9d8b7a3cf682a8f9ad1d';
const abi = Factory.abi;

const instance = new web3.eth.Contract(
	abi,
	address
);

export default instance;