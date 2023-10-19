const readline = require('readline');
const validator = require('validator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nama = '';
let hp = '';

function inputNama() {
    rl.question("Masukkan nama anda ? ", (Nama) => {
        if (validator.isLength(Nama, { min: 3, max: 50 })) {
            nama = Nama;
            inputNomor();
        } else {
            console.log("Nama anda salah. Silakan coba lagi.");
            inputNama();
        }
    });
}

function inputNomor() {
    rl.question("Masukkan Nomor Hp anda ? ", (inputHandphone) => {
        if (validator.isMobilePhone(inputHandphone, "any")) {
            hp = inputHandphone;
            Email();
        } else {
            console.log("Nomor Handphone anda salah. Silakan coba lagi.");
            inputNomor();
        }
    });
}

function Email() {
    rl.question("Masukkan email anda ? ", (email) => {
        if (validator.isEmail(email)) {
            console.log(`Nama saya adalah ${nama}, nomor telepon saya ${hp}, dan email saya adalah ${email}. Terima Kasih!!`);
            rl.close();
        } else {
            console.log("Alamat email tidak valid. Silakan coba lagi.");
            Email();
        }
    });
}

inputNama();