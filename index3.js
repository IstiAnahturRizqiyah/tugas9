const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("what is your name? ", (nama) => {
    console.log("your name is" ,nama);

    rl.close;
});