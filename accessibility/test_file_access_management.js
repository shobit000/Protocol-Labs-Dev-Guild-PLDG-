// test_file_access_management.js

const assert = require('assert');
const FileAccessManagement = require('../accessibility/file_access_management');

describe('FileAccessManagement', () => {
  let accessMgmt;

  beforeEach(() => {
    accessMgmt = new FileAccessManagement();
  });

  it('should grant and check access', () => {
    accessMgmt.grantAccess('file1', 'user1');
    assert.strictEqual(accessMgmt.hasAccess('file1', 'user1'), true);
  });

  it('should revoke access', () => {
    accessMgmt.grantAccess('file1', 'user1');
    accessMgmt.revokeAccess('file1', 'user1');
    assert.strictEqual(accessMgmt.hasAccess('file1', 'user1'), false);
  });
});
