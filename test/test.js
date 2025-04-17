const { expect } = require('chai');
const helloWorld = require('../index');

describe('Hello World Function', () => {
    it('should return "Hello, Class!"', () => {
        expect(helloWorld()).to.equal('Hello, Class!');
    });
});