import { describe, test, it, expect } from "vitest";
import { calculateAverage, factorial, fizzBuzz, max } from "../src/intro";

describe('max', () => {
    it('should return the first argument if it is greater', () => {
        expect(max(2, 1)).toBe(2);
    });
it('should return the first argument if arguments are equal', () => {
            expect(max(1, 1)).toBe(1);
        });
    it('should return the second argument if it is greater', () => {
                expect(max(1, 2)).toBe(2);
            })
});


describe('fizzBuzz', () => {
    it('should return fizzBuzz if arg is divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz")
    });

    it('should return fizz if arg is only divisible by 3', () => {
        expect(fizzBuzz(9)).toBe("Fizz")
    });

    it('should return Buzz if arg is only divisible by 5', () => {
        expect(fizzBuzz(5)).toBe("Buzz")
    });

    it('should return arg as a string if it is not divisible by 3 or 5', () => {
        expect(fizzBuzz(1)).toBe('1')
    });

});

describe('calculateAverage', () => {
    it('should return NaN if given an empty array', () => {
        expect(calculateAverage([])).toBe(NaN);
    });

    it('should calculate the average of an array with a single element', () => {
        expect(calculateAverage([1])).toBe(1);
    });

    it('should calculate the average of an array with 2 elements', () => {
        expect(calculateAverage([1, 2])).toBe(1.5);
    });

    it('should calculate the average of an array with 5 elements', () => {
        expect(calculateAverage([1, 2, 3, 4, 5])).toBe(3);
    });

})

describe('factorial', () => {
    it('should return 1 if number is zero', () => {
        expect(factorial(0)).toBe(1);
    });

    it('should return 6 if number is 3', ()=> {
        expect(factorial(3)).toBe(6);
    });

    it('should return 120 if number is 5', ()=> {
        expect(factorial(5)).toBe(120);
    });

    it('should return undefined if number is negative', ()=> {
        expect(factorial(-5)).toBeUndefined()
    });
})