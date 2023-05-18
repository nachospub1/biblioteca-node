const assert = require('chai').assert;
const sinon = require('sinon');
const copyRepository = require('../domain/repository');
const { describe, it } = require('mocha');

describe('CopyApplication', () => {
  describe('findOne', () => {
    it('should return copy if found', async () => {
      const copyId = '45';
      const expectedCopy = { id: 1, title: 'Copy 1' };
      const expectedResult = { success: true, code: 200, result: expectedCopy };
      sinon.stub(copyRepository, 'findOne').resolves(expectedCopy);
      const result = await copyRepository.findOne(copyId);
      assert.isTrue(expectedResult.success);
      assert.strictEqual(expectedResult.code, 200);
      assert.deepEqual(expectedResult.result, result);
      copyRepository.findOne.restore();
    });

    it('should return not found if no copy found', async () => {
      sinon.stub(copyRepository, 'findOne').resolves(null);
      const result = await copyRepository.findOne();
      const expectedResult = { success: false, code: 404, result : 'not found'};
      assert.isFalse(expectedResult.success);
      assert.strictEqual(expectedResult.code, 404);
      assert.strictEqual(expectedResult.result, 'not found');
      assert.deepEqual(result, null);
      copyRepository.findOne.restore();
    });

    it('should return error if an exception occurs', async () => {
      const mockError = new Error('Expected error');
      sinon.stub(copyRepository, 'findOne').rejects(mockError);

      try {
        await copyRepository.findOne();
        assert.fail('Expected error');
      } catch (error) {
        assert.strictEqual(error.message, 'Expected error');
      }
      const expectedResult = { success: false, code: 500 };

      assert.isFalse(expectedResult.success);
      assert.strictEqual(expectedResult.code, 500);
      copyRepository.findOne.restore();
    });
  });
});
