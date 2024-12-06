// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GovernanceMechanism {
    address public owner;
    mapping(address => bool) public voters;
    mapping(uint256 => Proposal) public proposals;
    uint256 public proposalCount;

    struct Proposal {
        uint256 id;
        string description;
        uint256 voteCount;
        bool executed;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    modifier onlyVoter() {
        require(voters[msg.sender], "Not a voter");
        _;
    }

    constructor() {
        owner = msg.sender;
        voters[owner] = true;
    }

    function addVoter(address voter) public onlyOwner {
        voters[voter] = true;
    }

    function removeVoter(address voter) public onlyOwner {
        voters[voter] = false;
    }

    function createProposal(string memory description) public onlyVoter {
        proposalCount++;
        proposals[proposalCount] = Proposal(proposalCount, description, 0, false);
    }

    function vote(uint256 proposalId) public onlyVoter {
        Proposal storage proposal = proposals[proposalId];
        require(!proposal.executed, "Proposal already executed");
        proposal.voteCount++;
    }

    function executeProposal(uint256 proposalId) public onlyOwner {
        Proposal storage proposal = proposals[proposalId];
        require(proposal.voteCount > 0, "No votes");
        proposal.executed = true;
        // Implement the actual proposal execution logic
    }
}
