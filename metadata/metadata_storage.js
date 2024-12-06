// metadata_storage.js

class MetadataStorage {
  constructor() {
    this.metadata = {};
  }

  // Method to upload and store file metadata
  uploadMetadata(fileId, metadata) {
    this.metadata[fileId] = metadata;
  }

  // Method to retrieve file metadata
  getMetadata(fileId) {
    return this.metadata[fileId] || null;
  }

  // Method to update file metadata
  updateMetadata(fileId, metadata) {
    if (this.metadata[fileId]) {
      this.metadata[fileId] = { ...this.metadata[fileId], ...metadata };
    }
  }

  // Method to delete file metadata
  deleteMetadata(fileId) {
    delete this.metadata[fileId];
  }
}

module.exports = MetadataStorage;
