
// Write your tests here!
const {expect} = require('chai');
const {substitution} = require('../src/substitution');

describe('tests for substitution() encoder/decoder',()=>{
    it('should return false if no alphabet provided',()=>{
        const message = "Oh no, our table, it's broken";
        const actual = substitution(message);
        expect(actual).to.be.false;
    })
    
    it('should return false if alphabet not exactly 26 characters',()=>{
        const message = "Hey there";
        const alphabet = "d38n.-0(tuyqrwe";
        const actual = substitution(message,alphabet);
        expect(actual).to.be.false;
    })

    it('should maintain spaces',()=>{
        const message = "Hey there";
        const alphabet = "d38n.-0(tuyqrwepx6m/,71294";
        const actual = substitution(message,alphabet);
        const expected = "(.9 /(.6.";
        expect(actual).to.equal(expected);
    })
    it('should maintain spaces',()=>{
        const message = "(.9 /(.6.";
        const expected = "hey there";
        const alphabet = "d38n.-0(tuyqrwepx6m/,71294";
        const actual = substitution(message,alphabet,false);
        expect(actual).to.equal(expected);
    })

    it('should return false if alphabet contains duplicates',()=>{
        const message = "Hey there";
        const alphabet = "d38n.-0(tuyqrwepx6n/,71294";
        const actual = substitution(message,alphabet);
        const expected = "(n9 /(n6n";
        expect(actual).to.be.false;
    })
})