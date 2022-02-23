// Write your tests here!
const {expect} = require('chai');
const {polybius} = require('../src/polybius');

describe('tests for polybius encoder/decoder',()=>{
    describe('encoder',()=>{
        it('should return a string',()=>{
            const message = "I'm a dude";
            const actual = polybius(message);
            expect(actual).to.be.a.string;
        })
        it('I or J should translate to 42', () => {
            const message = "I'm just me";
            const expected = "4223 42543444 2351";
            const actual = polybius(message);
            expect(actual).to.equal(expected);
        })
        it('should ignore case',()=>{
            const message = "lmnOPLMNop";
            const expected = "13233343531323334353";
            const actual = polybius(message);
            expect(actual).to.equal(expected);
        })
    })

    describe('decoder',()=>{
        it('should keep the spaces intact',()=>{
            const message = "4424543444 2351";
            const expected = "trust me";
            const actual = polybius(message,false);
            expect(actual).to.equal(expected);
        })
        it('translating 42 should produce i/j', () => {
            const message = "424321";
            
            const actual = polybius(message, false);
            expect(actual).to.include('i/j');
        })
        it('should return false if amount of numbers odd',()=>{
            
            const message = "13 5 233343531323334353";
            const actual = polybius(message ,false);
            expect(actual).to.be.false;
        })
    })
})