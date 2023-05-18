const assert = require('chai').assert;
const sinon = require('sinon');
const copyRepository = require('../domain/repository');
const { describe, it } = require('mocha');

describe('CopyApplication', () => {
  describe('update', () => {
    it('should return updated copy if succeeded', async () => {
      const expectedCopy = { id: 1, data: { title: 'Copy 1 updated' } };
      const expectedResult = { success: true, code: 200, result: expectedCopy };
      sinon.stub(copyRepository, 'update').resolves(expectedCopy);
      const result = await copyRepository.update(expectedCopy);
      assert.isTrue(expectedResult.success);
      assert.strictEqual(expectedResult.code, 200);
      assert.deepEqual(expectedResult.result, result);
      copyRepository.update.restore();
    });

    it('should return message when update failed (register does not exist)', async () => {
      const expectedCopy = { id: 1, data: { title: 'Copy 1 updated' } };
      const expectedResult = { success: false, code: 400, result: 'Resource not updated.' };
      sinon.stub(copyRepository, 'update').resolves(null);
      await copyRepository.update(expectedCopy);
      assert.isFalse(expectedResult.success);
      assert.strictEqual(expectedResult.code, 400);
      assert.strictEqual(expectedResult.result, 'Resource not updated.');
      copyRepository.update.restore();
    });

    it('should return same copy when any parameter does not exist on the model', async () => {
      const expectedCopy = { id: 1, data: { title: 'Copy 1' } };
      const testCopy = { id: 1, data: { author: 'Author 1 updated', categoy: 'New Category' } };
      const expectedResult = { success: true, code: 200, result: expectedCopy };
      sinon.stub(copyRepository, 'update').resolves(expectedCopy);
      const result = await copyRepository.update(testCopy);
      assert.isTrue(expectedResult.success);
      assert.strictEqual(expectedResult.code, 200);
      assert.deepEqual(expectedResult.result, result);
      copyRepository.update.restore();
    });

    it('should return copy and update only parameters that exist on the model', async () => {
      const expectedCopy = { id: 1, data: { title: 'Copy 1 updated' } };
      const testCopy = { id: 1, data: { title: 'Copy 1 updated', newField: 'New value' } };
      const expectedResult = { success: true, code: 200, result: expectedCopy };
      sinon.stub(copyRepository, 'update').resolves(expectedCopy);
      const result = await copyRepository.update(testCopy);
      assert.isTrue(expectedResult.success);
      assert.strictEqual(expectedResult.code, 200);
      assert.deepEqual(expectedResult.result, result);
      copyRepository.update.restore();
    });

    it('should return error if an exception occurs', async () => {
      const mockError = new Error('Expected error');
      sinon.stub(copyRepository, 'update').rejects(mockError);

      try {
        await copyRepository.update();
        assert.fail('Expected error');
      } catch (error) {
        assert.strictEqual(error.message, 'Expected error');
      }

      const expectedResult = { success: false, code: 500 };
      assert.isFalse(expectedResult.success);
      assert.strictEqual(expectedResult.code, 500);
      copyRepository.update.restore();
    });
  });
});
