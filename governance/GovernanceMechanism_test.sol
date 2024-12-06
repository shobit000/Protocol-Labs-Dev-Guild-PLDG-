// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/governance/governance_mechanism.sol";

contract TestGovernanceMechanism {
    GovernanceMechanism governance = GovernanceMechanism(DeployedAddresses.GovernanceMechanism());

    function testAddVoter() public {
        governance.addVoter(address(this));
        bool isVoter = governance.voters(address(this));
        Assert.isTrue(isVoter, "Address should be added as voter");
    }

    function testCreateProposal() public {
        governance.createProposal("Test Proposal");
        (uint256 id, string memory description, , ) = governance.proposals(1);
        Assert.equal(id, 1, "Proposal ID should be 1");
        Assert.equal(description, "Test Proposal", "Proposal description should match");
    }

    function testVoteAndExecuteProposal() public {
        governance.createProposal("Test Proposal");
        governance.vote(1);
        governance.executeProposal(1);
        (, , , bool executed) = governance.proposals(1);
        Assert.isTrue(executed, "Proposal should be executed");
    }
}
