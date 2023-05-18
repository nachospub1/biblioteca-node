const assert = require('chai').assert;
const sinon = require('sinon');
const copyRepository = require('../domain/repository');
const { describe, it } = require('mocha');

describe('CopyApplication', () => {
  describe('create', () => {
    it('should return new copy if created', async () => {
      const expectedCopy = { id: 1, title: 'Copy 1' };
      const expectedResult = { success: true, code: 201, result: expectedCopy };
      sinon.stub(copyRepository, 'create').resolves(expectedCopy);
      const result = await copyRepository.create(expectedCopy);
      assert.isTrue(expectedResult.success);
      assert.strictEqual(expectedResult.code, 201);
      assert.deepEqual(expectedResult.result, result);
      copyRepository.create.restore();
    });

    it('should return error if an exception occurs', async () => {
      const mockError = new Error('Expected error');
      sinon.stub(copyRepository, 'create').rejects(mockError);

      try {
        await copyRepository.create();
        assert.fail('Expected error');
      } catch (error) {
        assert.strictEqual(error.message, 'Expected error');
      }

      const expectedResult = { success: false, code: 500 };
      assert.isFalse(expectedResult.success);
      assert.strictEqual(expectedResult.code, 500);
      copyRepository.create.restore();
    });
  });
});
