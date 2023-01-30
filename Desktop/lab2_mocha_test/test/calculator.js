var calculator = require('../app/calculator.js');
var assert = require('chai').assert;

describe('calculator.js', () => {
    // Addition
    it('pass', () => {
        assert.equal(calculator.add(5, 2), 7);
    });
    it('fail', () => {
        assert.equal(calculator.add(5, 2), 8);
    });

    // Subtraction
    it('pass', () => {
        assert.equal(calculator.sub(5, 2), 3);
    });
    it('fail', () => {
        assert.equal(calculator.sub(5, 2), 5);
    });

    // Multiplication
    it('pass', () => {
        assert.equal(calculator.mul(5, 2), 10);
    });
    it('fail', () => {
        assert.equal(calculator.mul(5, 2), 12);
    });

    // Division
    it('pass', () => {
        assert.equal(calculator.div(10, 2), 5);
    });
    it('fail', () => {
        assert.equal(calculator.div(10, 2), 2);
    });
});