var generateBtn = document.querySelector("#generate");

let upperCaseAlphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
let lowerCaseAlphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
let numeric = Array.from('1234567890')
let special_characters = Array.from("!@#$%^&*?<>/");

generateBtn.onclick = () => {

    let UsersPasswordArray = [];
    let FinalUserPassword = [];

    let numberOfCharactersPrompt = window.prompt("Welcome to Password Generator. In the prompt below, please type the number of characters you would like within your password. Please note it must be a minimum of 8 and a maxmium of 128.");
        if (numberOfCharactersPrompt >= 8 && numberOfCharactersPrompt <= 128) {
                console.log(numberOfCharactersPrompt);
                window.alert("Great! Next, let's select the types of characters you want. You MUST select at least one type from the four options. Please select OK for yes or Cancel for no with what characters you'd potentially like in your password!"); 
                let promptUppercase = window.confirm("Uppercase Letters?");
                if (promptUppercase === true) {
                        UsersPasswordArray = UsersPasswordArray.concat(upperCaseAlphabet)
                    }
                let promptLowerCase = window.confirm("Lowercase Letters?");
                if (promptLowerCase === true) {
                        UsersPasswordArray = UsersPasswordArray.concat(lowerCaseAlphabet);
                    }
                let numericPrompt = window.confirm("Numerics?");
                if (numericPrompt === true) {
                        UsersPasswordArray = UsersPasswordArray.concat(numeric);
                }
                let specialPrompt = window.confirm("Special? (Ex: !@#($)?");
                if (specialPrompt === true) {
                        UsersPasswordArray = UsersPasswordArray.concat(special_characters);
                }
