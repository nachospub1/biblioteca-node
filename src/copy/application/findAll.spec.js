const assert = require('chai').assert;
const sinon = require('sinon');
const copyService = require('./copyService');
const copyRepository = require('../domain/repository');
const { describe, it } = require('mocha');

describe('CopyService', () => {
  describe('findAll', () => {
    it('should return copies if found', async () => {
      const expectedCopies = [{ id: 1, title: 'Copy 1' }, { id: 2, title: 'Copy 2' }];
      sinon.stub(copyRepository, 'findAll').resolves(expectedCopies);

      const result = await copyService.findAll();

      assert.isTrue(result.success);
      assert.strictEqual(result.code, 200);
      assert.deepEqual(result.result, expectedCopies);

      copyRepository.findAll.restore();
    });

    it('should return "not found" if no copies found', async () => {
      sinon.stub(copyRepository, 'findAll').resolves([]);

      const result = await copyService.findAll();

      assert.isFalse(result.success);
      assert.strictEqual(result.code, 404);
      assert.strictEqual(result.result, 'not found');

      copyRepository.findAll.restore();
    });

    it('should return error if an exception occurs', async () => {
      const error = new Error('Database error');
      sinon.stub(copyRepository, 'findAll').rejects(error);
      sinon.stub(copyService, 'logger');

      const result = await copyService.findAll();

      assert.isFalse(result.success);
      assert.strictEqual(result.code, 500);
      assert.isUndefined(result.result);

      sinon.assert.calledWith(copyService.logger, error.message, __filename);

      copyRepository.findAll.restore();
      copyService.logger.restore();
    });
  });

  // Rest of the test cases for other functions (findOne, create, update, destroy)
});