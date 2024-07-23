const greet = (user) => {
    return 'Hello'+ ' ' + user
}

const add = (a, b) => {
    return a + b
}

const reverse = (str) => {
    return str.reverse()
}

const substract = (a, b) => {
    return a - b;
}

module.exports = {
    greet: greet,
    reverse: reverse,
    add: add,
    substract: substract,
}