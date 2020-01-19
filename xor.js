let msg = 'HELLOWORLD'
let key;

let ord = (str) => {
    // Переводим буквы в ASCII код
    return str.charCodeAt(0);
}

let chr = (num) => {
    // Переводим ASCII код в букву
    return String.fromCharCode(num)
    // A - 65, Z - 90
}

let binToDec = (str) => {
    // из двоичной в десятичную
    return parseInt(str, 2)
}

let decToBin = (num) => {
    // из десятичной в двоичную
    return Number(num).toString(2); 
}

let wordToBin = (str) => {
    // Преобразуем слово в двоичный код
    res = ''
    for (i of str) {
        res += decToBin(ord(i))
    }
    return res;
}

function randomLetter() {
    // Случайная буква A-Z
    let rand = ord('A') + Math.random() * (ord('Z') + 1 - ord('A'));
    return chr(Math.floor(rand));
}

let createKey = (msg) => {
    // Создаем ключ
    // 1. Ключ такой же длины, как и исходное сообщение
    let key = '';
    let len = msg.length;
    
    for (i = 0; i < len; i++) {
        key += randomLetter();
    }
    return key
}

key = createKey(msg)

let xor = (a, b) => {
    // Проверка исключающее ИЛИ
    // Number
    return Number(a != b);
}


let vigenereSquareDecrypt = (a, b) => {
    // https://upload.wikimedia.org/wikipedia/commons/2/25/Vigen%C3%A8re_square.svg
    return chr((ord(a) - 2 * ord('A') + ord(b)) % 26 + ord('A'))
}


let vigenereSquareEncrypt = (a, b) => {
    return chr(Math.abs((ord(b) - ord(a) + 26 - 2 * ord('A'))) % 26 + ord('A') )
}

function decrypt(msg, key) {
    let res = '';
    for (let i = 0; i < msg.length; i++) {
        res += vigenereSquareDecrypt(msg[i], key[i])
    }
    return res;   
}

let decryptMsg = decrypt(msg, key);


function encrypt(msg, key) {
    let res = '';
    for (let i = 0; i < msg.length; i++) { 
        res += vigenereSquareEncrypt(msg[i], key[i])
    }
    return res; 
}

let encryptMsg = encrypt(decryptMsg, key)

console.log(`Сообщение: ${msg}\nКлюч: ${key}\nЗакодированное: ${decryptMsg}\nРаскодированное: ${encryptMsg}`)
// Сообщение: HELLOWORLD
// Ключ: TVWJKUVLAP
// Закодированное: AZHUYQJCLS
// Раскодированное: HELLOWORLD




// function decrypt(msg, key) {
//     console.log(msg.toUpperCase(), key)
//     // Шифруем сообщение с использованием таблицы Виженера
//     // 1. Складываем посимвольно xor
//     // 2. Получаем двоичные блоки
//     // 3. Переводим блоки в десятичные числа 
//     let msgPlusKey = '';
//     let xorArr;
//     let msgBin = wordToBin(msg);
//     let keyBin = wordToBin(key);
//     for (let i = 0; i < msgBin.length; i++) {
//         msgPlusKey += xor(msgBin[i], keyBin[i])
//     }
//     // 2. Разбиваем сообщение на секции по 7 символов
//     xorArr = msgPlusKey.match(/.{1,7}/g)
//     res = []
//     for (i of xorArr) {
//         res.push(binToDec(i))
//     }
//     return res
//     return res.join('')
// }


// function encrypt(msg, key) {
//     let res = decrypt(msg, key)
//     // console.log(msg)
//     // Расшифровываем сообщение
//     let msgBin = wordToBin(msg);
//     let xorArr;
//     // 2. Разбиваем сообщение на секции по 7 символов
//     xorArr = res.match(/.{1,7}/g)
       // console.log(res)
// }


// let alphabet = (letter) => {
//     let res = ord(letter) - ord('A') 
//     return res
// }