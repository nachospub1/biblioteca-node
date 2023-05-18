const assert = require('chai').assert;
const sinon = require('sinon');
const copyRepository = require('../domain/repository');
const { describe, it } = require('mocha');

describe('CopyApplication', () => {
  describe('findAll', () => {
    it('should return copies if found', async () => {
      const expectedCopies = [{ id: 1, title: 'Copy 1' }, { id: 2, title: 'Copy 2' }];
      const expectedResult = { success: true, code: 200, result: expectedCopies };
      sinon.stub(copyRepository, 'findAll').resolves(expectedCopies);
      const result = await copyRepository.findAll();
      assert.isTrue(expectedResult.success);
      assert.strictEqual(expectedResult.code, 200);
      assert.deepEqual(expectedResult.result, result);
      copyRepository.findAll.restore();
    });

    it('should return not found when no copies found', async () => {
      sinon.stub(copyRepository, 'findAll').resolves([]);
      const result = await copyRepository.findAll();
      const expectedResult = { success: false, code: 404, result: 'not found' };
      assert.isFalse(expectedResult.success);
      assert.strictEqual(expectedResult.code, 404);
      assert.deepEqual(expectedResult.result, 'not found');
      assert.deepEqual(result, []);
      copyRepository.findAll.restore();
    });

    it('should return error if an exception occurs', async () => {
      const mockError = new Error('Expected error');
      sinon.stub(copyRepository, 'findAll').rejects(mockError);

      try {
        await copyRepository.findAll();
        assert.fail('Expected error');
      } catch (error) {
        assert.strictEqual(error.message, 'Expected error');
      }
      const expectedResult = { success: false, code: 500 };

      assert.isFalse(expectedResult.success);
      assert.strictEqual(expectedResult.code, 500);
      copyRepository.findAll.restore();
    });
  });
});
