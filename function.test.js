const { greet, add, reverse } = require('./script');

test ('it should greet user', () => {
    expect( greet('pk')).toEqual('Hello pk')
})

test ('it should add two numbers', () => {
    expect(add(5, 5)).toBe(10)
})

test ('it reverse strings',() => {
    expect(reverse('hello')).toBe('olleh')
})