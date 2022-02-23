// Write your tests here!
const {expect} = require('chai');
const {caesar} = require('../src/caesar');

/*
If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.
Spaces should be maintained throughout, as should other nonalphabetic symbols.
Capital letters can be ignored.
If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g., z becomes c).
*/
describe('tests for caesar() function', () => {
    it('should return false if shift equals 0', () => {
        const message = "Hello from the other side";
        const shift = 0;
        const actual = caesar(message,shift)
        expect(actual).to.be.false;
    })
    it('should return false if shift greater than 25', () => {
        const message = "Hello from the other side";
        const shift = 41;
        const actual = caesar(message,shift)
        expect(actual).to.be.false;
    })
    it('should return false if shift less -25', () => {
        const message = "Hello from the other side";
        const shift = -30;
        const actual = caesar(message,shift)
        expect(actual).to.be.false;
    })
    describe('encoding', () => {
        it('should maintain spaces and symbols when encoding',  () => {
            const message = "i'm the besss!";
            const shift = 4;
            const expected = "m'q xli fiwww!";
            const actual = caesar(message,shift);
            expect(actual).to.equal(expected);
        })
        it('should wrap around alphabet when it overruns',  () => {
            const message = "i'm the besss!";
            const shift = -4;
            const expected = "e'i pda xaooo!";
            const actual = caesar(message,shift);
            expect(actual).to.equal(expected);
        })
        it('should wrap around alphabet when it overruns',() => {
            const message = "xyz!";
            const shift = 3;
            const expected = "abc!";
            const actual = caesar(message,shift);
            expect(actual).to.equal(expected);
        })
        it('should shift letters properly', ()=>{
            const message = "abcde";
            const shift = 4;
            const expected = "efghi";
            const actual = caesar(message,shift);
            expect(actual).to.equal(expected);
        })
        it('should negatively shift letters properly', ()=>{
            const message = "I'm the besss!";
            const shift = -4;
            const expected = "e'i pda xaooo!";
            const actual = caesar(message,shift);
            expect(actual).to.equal(expected);
        })
    })
    describe('decoding', () => {
        
        it('should maintain spaces and symbols when decoding',  () => {
            const shift = 4;
            const message = "m'q xli fiwww!";
            const expected = "i'm the besss!";
            const actual = caesar(message,shift,false);
            expect(actual).to.equal(expected);
        })
        it('should wrap around alphabet when it overruns',  () => {
            const shift = -4;
            const message = "e'i pda xaooo!";
            const expected = "i'm the besss!";
            const actual = caesar(message,shift,false);
            expect(actual).to.equal(expected);
        })
        it('should wrap around alphabet when it overruns',() => {
            const expected = "abc!";
            const message = "xyz!";
            const shift = -3;
            const actual = caesar(message,shift,false);
            expect(actual).to.equal(expected);
        })
        
    })
    

})