# Protocol-Labs-Dev-Guild-PLDG

## Metadata Storage

### Usage

```javascript
const MetadataStorage = require('./metadata/metadata_storage');
const storage = new MetadataStorage();

// Upload metadata
storage.uploadMetadata('file1', { name: 'File 1' });

// Retrieve metadata
console.log(storage.getMetadata('file1')); // { name: 'File 1' }

// Update metadata
storage.updateMetadata('file1', { size: 200 });

// Delete metadata
storage.deleteMetadata('file1');


const FileAccessManagement = require('./accessibility/file_access_management');
const accessMgmt = new FileAccessManagement();

// Grant access
accessMgmt.grantAccess('file1', 'user1');

// Check access
console.log(accessMgmt.hasAccess('file1', 'user1')); // true

// Revoke access
accessMgmt.revokeAccess('file1', 'user1');

pragma solidity ^0.8.0;

import "./governance/governance_mechanism.sol";

contract MyContract {
    GovernanceMechanism public governance;

    constructor() {
        governance = new GovernanceMechanism();
    }

    function addVoter(address voter) public {
        governance.addVoter(voter);
    }

    function createProposal(string memory description) public {
        governance.createProposal(description);
    }

    function vote(uint256 proposalId) public {
        governance.vote(proposalId);
    }

    function executeProposal(uint256 proposalId) public {
        governance.executeProposal(proposalId);
    }
}

# For JavaScript tests
npm test

# For Solidity tests
truffle test
