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
