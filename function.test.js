const { greet, add, reverse,substract } = require('./script');

test ('it should greet user', () => {
    expect( greet('pk')).toEqual('Hello pk')
})

test ('it should add two numbers', () => {
    expect(add(5, 5)).toBe(10)
})

test('should return the reversed string when given a non-empty string', () => {
    const result = reverse('hello');
    expect(result).toBe('olleh');
});

test('should return the correct result when subtracting two positive integers', () => {
    const result = substract(10, 5);
    expect(result).toBe(5);
});