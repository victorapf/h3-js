/**
 * mediante el loop for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a,"n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a,"n"]
 */
let str = "fooziman";
let len = str.length
let result = [];
let i = 0;

for (let i=0, len = str.length; i < len; i++){
    result.push(str[i])
}

//export result
module.exports = result;