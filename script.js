const greet = (user) => {
    return 'Hello'+ ' ' + user
}

const add = (a, b) => {
    return a + b
}

const reverse = (str) => {
    if (str === '') {
      return '';
    } else {
      return reverse(str.slice(1)) + str[0];
    }
  };


const substract = (a, b) => {
    return a - b;
}

module.exports = {
    greet: greet,
    reverse: reverse,
    add: add,
    substract: substract,
}