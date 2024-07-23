const { greet, add, reverse } = require('./script');

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