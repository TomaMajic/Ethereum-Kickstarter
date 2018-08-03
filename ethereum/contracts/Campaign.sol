pragma solidity ^0.4.23;

contract Campaign {

	struct Request {
		uint256 amount;
		uint256 approvalCount;
		address recipient;
		string description;
		bool complete;
		mapping(address => bool) approvals;
	}

	uint256 public minimalContribution;
	uint256 public endTime;
	uint256 public contributorsCount;
	uint256 public hardCap;

	address public owner;

	Request[] public requests;

	mapping(address => bool) public contributors;

	constructor(uint256 _minContribution, 
				uint256 _duration,
				uint256 _hardCap,
				address _owner) 
	public {
		owner = _owner;
		minimalContribution = _minContribution;
		endTime = now + _duration;
		hardCap = _hardCap;
	}

	function contribute() external payable {
		require(msg.value > minimalContribution);
		require(endTime > now);
		require(address(this).balance < hardCap);

		contributors[msg.sender] = true;
		contributorsCount += 1;
	}

	function createRequest(uint256 _amount, 
							address _recipient,
							string _description) 
	external 
	onlyOwner {
		Request memory newRequest = Request({
			amount: _amount,
			recipient: _recipient,
			description: _description,
			complete: false,
			approvalCount: 0
		});

		requests.push(newRequest);
	}

	function approveRequest(uint256 _index) external onlyContributor onlyIfNotApproved(_index) {
		Request storage request = requests[_index];

		request.approvals[msg.sender] = true;
		request.approvalCount += 1;
	}

	function finalizeRequest(uint256 _index) external onlyOwner onlyApproved(_index) {
		Request storage request = requests[_index];

		require(!request.complete);
		require(request.amount <= address(this).balance);

		request.complete = true;
		request.recipient.transfer(request.amount);
	}

	function getSummary() external view returns(uint256 balance, 
												uint256 minContribution,
												uint256 requestCount, 
												uint256 contCount,
												address campaignOwner) 
	{
		balance = address(this).balance;
		minContribution = minimalContribution;
		requestCount = requests.length;
		contCount = contributorsCount;
		campaignOwner = owner;
	}

	function getRequestsCount() external view returns(uint256) {
		return requests.length;
	}

	modifier onlyOwner {
		require(msg.sender == owner);
		_;
	}

	modifier onlyContributor {
		require(contributors[msg.sender]);
		_;
	}

	modifier onlyIfNotApproved(uint256 _index) {
		require(!requests[_index].approvals[msg.sender]);
		_;
	}

	modifier onlyApproved(uint256 _index) {
		require(requests[_index].approvalCount > (contributorsCount / 2));
		_;
	}
}
