const cows = require('cowsay');

const cowsay = (text) => cows.say({

    text,
    e:'^^',
    T:'s',
    f:'USA'

})

console.log(cowsay("hello"))

module.exports = cowsay;







