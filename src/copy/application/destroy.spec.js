const assert = require('chai').assert;
const sinon = require('sinon');
const copyRepository = require('../domain/repository');
const { describe, it } = require('mocha');

describe('CopyApplication', () => {
  describe('destroy', () => {
    it('should return copy if deleted', async () => {
      const expectedCopies = [{ id: 1, title: 'Copy 1' }, { id: 2, title: 'Copy 2' }];
      const expectedResult = { success: true, code: 200, result: expectedCopies };
      sinon.stub(copyRepository, 'destroy').resolves(expectedCopies);

      const result = await copyRepository.destroy();
      assert.isTrue(expectedResult.success);
      assert.strictEqual(expectedResult.code, 200);
      assert.deepEqual(expectedResult.result, result);
      copyRepository.destroy.restore();
    });

    it('should return not found if element to delete does not exist', async () => {
      sinon.stub(copyRepository, 'destroy').resolves(null);
      const testId = 45;
      const result = await copyRepository.destroy(testId);
      const expectedResult = { success: false, code: 404, result: 'not found' };
      assert.isFalse(expectedResult.success);
      assert.strictEqual(expectedResult.code, 404);
      assert.deepEqual(expectedResult.result, 'not found');
      assert.deepEqual(result, null);
      copyRepository.destroy.restore();
    });

    it('should return error if an exception occurs', async () => {
      const mockError = new Error('Expected error');
      sinon.stub(copyRepository, 'destroy').rejects(mockError);

      try {
        await copyRepository.destroy();
        assert.fail('Expected error');
      } catch (error) {
        assert.strictEqual(error.message, 'Expected error');
      }
      const expectedResult = { success: false, code: 500 };

      assert.isFalse(expectedResult.success);
      assert.strictEqual(expectedResult.code, 500);
      copyRepository.destroy.restore();
    });
  });
});
