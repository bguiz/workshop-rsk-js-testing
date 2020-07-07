// tests for: feature1

const assert = require('assert');

const { add } = require('./feature1.js');

describe('feature1', () => {

  describe('add', () => {

    it('works with specific values', () => {
      // specific known values
      const result = add(1, 2);
      assert.equal(result, 3);
    });

  });

});
