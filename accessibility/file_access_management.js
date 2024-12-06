// file_access_management.js

class FileAccessManagement {
  constructor() {
    this.accessControlList = {};
  }

  // Method to grant access to a file
  grantAccess(fileId, userId) {
    if (!this.accessControlList[fileId]) {
      this.accessControlList[fileId] = new Set();
    }
    this.accessControlList[fileId].add(userId);
  }

  // Method to revoke access to a file
  revokeAccess(fileId, userId) {
    if (this.accessControlList[fileId]) {
      this.accessControlList[fileId].delete(userId);
    }
  }

  // Method to check if a user has access to a file
  hasAccess(fileId, userId) {
    return this.accessControlList[fileId] && this.accessControlList[fileId].has(userId);
  }
}

module.exports = FileAccessManagement;
