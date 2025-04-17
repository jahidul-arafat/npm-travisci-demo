const { expect } = require('chai');
const helloWorld = require('../index');

describe('Hello World Function', () => {
    it('should return "Hello, World!"', () => {
        expect(helloWorld()).to.equal('Hello, World!');
    });
});