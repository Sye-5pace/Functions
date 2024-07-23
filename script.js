const greet = (user) => {
    return 'Hello'+ ' ' + user
}

const add = (a, b) => {
    return a + b
}

const reverse = (str) => {
    return str.reverse()
}


module.exports = {
    greet: greet,
    reverse: reverse,
    add: add
}