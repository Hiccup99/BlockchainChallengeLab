pragma solidity ^0.4.15;

import './SafeMath.sol';

contract Project {
    using SafeMath for uint256;

    address owner;
    address dataCollector;

    uint256 kwGenerated;
    uint256 kwPrice;

    uint256 projectTotalContribution;

    uint256 membersCount;

    uint256 debt;
    uint256 balance;

    struct Member {
        uint256 contribution;
        bool initialized;
    }
    mapping (address=>Member) membersContribution;
    mapping (uint256=>address) members;

    bool isCrowdfundingPeriod;

    function resetData() external onlyOwner() {
        for (uint256 i = 0; i < membersCount; i++) {
            projectTotalContribution = projectTotalContribution.sub(membersContribution[members[i]].contribution);
            membersContribution[members[i]] = Member(0, false);
        }
        
        membersCount = 0;
    }

    modifier onlyDataCollector {
        require(msg.sender == dataCollector);
        _;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    modifier onlyInCrowdfundingPeriod {
        require(isCrowdfundingPeriod == true);
        _;
    }

    modifier onlyMember {
        require(membersContribution[msg.sender].initialized == true);
        _;        
    }

    function Project(address _owner) public {
        owner = _owner;
        isCrowdfundingPeriod = true;
        projectTotalContribution = 0;
        membersCount = 0;
        kwGenerated = 0;
        debt = 0;
        balance = 0;
    }
    
    /* OWNER ACTIONS */
    
    /* user can contribute only if owner add him to crowdsale */
    function addMember(address _memberAddress) public onlyOwner() onlyInCrowdfundingPeriod() {
        members[membersCount] = _memberAddress;
        membersCount = membersCount.add(1);
    }   

    function endCrowdfundingPeriod() public onlyOwner() onlyInCrowdfundingPeriod() {
        isCrowdfundingPeriod = false;
    }

    function getStake(address _memberAddress) view public returns (uint256) {
        return membersContribution[_memberAddress].contribution.mul(10000000000000000000).div(projectTotalContribution);
   
    }
    
    function setDataCollector(address _dataCollector) public onlyOwner() {
        dataCollector = _dataCollector;
    }
    
    function setKwPrice(uint256 _kwPrice) public onlyOwner() {
        kwPrice = _kwPrice;
    }

    function setKwGenerated(uint256 _kwGenerated) public onlyOwner() {
        kwGenerated = _kwGenerated;
    }

    function setDebt(uint256 _debt) public onlyOwner() {
        debt = _debt;
    }

    function withdraw(address _memberAddress, uint256 _funds) public onlyOwner() {
        _memberAddress.transfer(_funds);
    }

    /* DATACOLLECTOR ACTIONS */

    function addKwGenerated(uint256 _kwGenerated) public onlyOwner() {
        kwGenerated = kwGenerated.add(_kwGenerated);
    }

    event Special(uint256 _fund, uint256 _div);

    function payDebt() public payable onlyDataCollector() {
        uint256 stake;
        balance = msg.value;
        for (uint256 i = 0; i < membersCount; i++) {
            stake = membersContribution[members[i]].contribution.mul(msg.value).div(projectTotalContribution);
            //corr = getStake(members[i]).mul(msg.value).div(10000000000000000000);
            Special(stake, msg.value);
            members[i].transfer(stake);
        }
        
    }
    
    /* MEMBER ACTIONS */

    function getMyStake() constant public returns (uint256) {
        return membersContribution[msg.sender].contribution.mul(10000000000000000000).div(projectTotalContribution);
    }
    
    
    function getMyContribution() constant public returns (uint256) {
        return membersContribution[msg.sender].contribution;
    }

     /* user can contribute only if owner add him to the crowdsale */
    function contribute(uint256 _contribution) public onlyInCrowdfundingPeriod() returns (uint256) {
        members[membersCount] = msg.sender;
        projectTotalContribution = projectTotalContribution.add(_contribution);
        membersContribution[msg.sender] = Member(_contribution, true);
        membersCount = membersCount.add(1);
        return membersCount;
        
    }   

    /* GETTERS */

    function getOwner() public view returns (address) {
        return owner;
    }

    function getDataCollector() public view returns (address) {
        return dataCollector;
    }

    function getProjectTotalContribution() public view returns (uint256) {
        return projectTotalContribution;
    }

    function setProjectTotalContribution(uint _projectTotalContribution) public {
        projectTotalContribution = _projectTotalContribution;
    }

    function getMembersCount() public view returns (uint256) {
        return membersCount;
    }

    function getKwGenerated() public view returns (uint256) {
        return kwGenerated;
    }

    function getKwPrice() public view returns (uint256) {
        return kwPrice;
    }

    function getIsCrowdfundingPeriod() public view returns (bool) {
        return isCrowdfundingPeriod;
    }

    function getDebt() public view returns (uint256) {
        return debt;
    }
    
    function getBalance() public view returns (uint256) {
        return balance;
    }
}
