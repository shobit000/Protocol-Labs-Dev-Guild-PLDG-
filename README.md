Coding Problem: Decentralized Data Governance
Design a system where users can upload file metadata to a decentralized storage solution (e.g., IPFS) and govern the availability of these files collaboratively through on-chain governance.

Problem Requirements

File Metadata Storage:
Upload file metadata such as IPFS CID, name, description, and uploader address.
Store metadata on-chain for governance purposes.

File Accessibility Management:
Allow users to propose adding or removing files from an "accessible" list.
Use governance (voting) to decide whether files remain accessible.

Governance Mechanism:
Implement a DAO-like voting system where token holders can vote on proposals.
Files are marked "accessible" or "hidden" based on the majority vote.

Interoperability:
Use IPFS or Filecoin for decentralized file storage.
Use Ethereum or compatible chains for on-chain governance.


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
```

## File Accessibility Management

### Usage
```
const FileAccessManagement = require('./accessibility/file_access_management');
const accessMgmt = new FileAccessManagement();

// Grant access
accessMgmt.grantAccess('file1', 'user1');

// Check access
console.log(accessMgmt.hasAccess('file1', 'user1')); // true

// Revoke access
accessMgmt.revokeAccess('file1', 'user1');
```

## Governance Mechanism

### Usage
```
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
```

## Running Tests
```
# For JavaScript tests
npm test

# For Solidity tests
truffle test
