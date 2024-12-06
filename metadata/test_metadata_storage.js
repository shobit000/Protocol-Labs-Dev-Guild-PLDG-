// test_metadata_storage.js

const assert = require('assert');
const MetadataStorage = require('../metadata/metadata_storage');

describe('MetadataStorage', () => {
  let storage;

  beforeEach(() => {
    storage = new MetadataStorage();
  });

  it('should upload and retrieve metadata', () => {
    storage.uploadMetadata('file1', { name: 'File 1' });
    assert.deepStrictEqual(storage.getMetadata('file1'), { name: 'File 1' });
  });

  it('should update metadata', () => {
    storage.uploadMetadata('file1', { name: 'File 1' });
    storage.updateMetadata('file1', { size: 200 });
    assert.deepStrictEqual(storage.getMetadata('file1'), { name: 'File 1', size: 200 });
  });

  it('should delete metadata', () => {
    storage.uploadMetadata('file1', { name: 'File 1' });
    storage.deleteMetadata('file1');
    assert.strictEqual(storage.getMetadata('file1'), null);
  });
});
