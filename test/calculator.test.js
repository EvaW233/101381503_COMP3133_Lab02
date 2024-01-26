const assert = require('assert');
const { add, sub, mul, div } = require('../app/calculator');

//add function
describe('Addition Tests', function () {
    it('add(5, 2) expected result 7', function () {
        assert.equal(add(5, 2), 7); 
    });

    it('add(5, 2) expected result 8 FAIL', function () {
        assert.equal(add(5, 2), 8); 
    });
});

//sub function
describe('Subtraction Tests', function () {
    it('sub(5, 2)  expected result 3', function () {
        assert.equal(sub(5, 2), 3); 
    });

    it('sub(5, 2)  expected result 5 FAIL', function () {
        assert.equal(sub(5, 2), 5); 
    });
});

//mul function
describe('Multiplication Tests', function () {
    it('mul(5, 2) expected result 10', function () {
        assert.equal(mul(5, 2), 10); 
    });

    it('mul(5, 2) expected result 12 FAIL', function () {
        assert.equal(mul(5, 2), 12); 
    });
});

//div function
describe('Division Tests', function () {
    it('div(10, 2)  expected result 5', function () {
        assert.equal(div(10, 2), 5); 
    });

    it('div(10, 2) expected result 2 FAIL', function () {
        assert.equal(div(10, 2), 2); 
    });
});
