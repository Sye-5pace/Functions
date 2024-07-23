const { greet, add } = require('./script');

test ('it should greet user', () => {
    expect( greet('pk')).toEqual('Hello pk')
})