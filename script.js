var generateBtn = document.querySelector("#generate");

let upperCaseAlphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
let lowerCaseAlphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
let numeric = Array.from('1234567890')
let special_characters = Array.from("!@#$%^&*?<>/");

generateBtn.onclick = () => {

    let UsersPasswordArray = [];
    let FinalUserPassword = [];