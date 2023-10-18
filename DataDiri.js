const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("what is your name? ", (nama) => {
rl.question("your phone number is? ", (noHp) => {
rl.question("your email is? ", (email) => {
    console.log('your name is' ,nama + ' your phone number is' ,noHp + ' your email is' ,email);
    rl.close()
})
})
});