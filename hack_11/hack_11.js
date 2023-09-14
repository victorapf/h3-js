/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

const numberMap = {
    1: "one",
    3: "three",
    5: "five"
  };
  
const mutatedStringArray = stringArray.map((string) => {
    if (string === "foo") {
      return "f00";
    } else if (string === "bar") {
      return "Bar";
    } else if (string === "baz") {
      return "b@z";
    } else if (string === "qux") {
      return "quX";
    } else if (string === "echo") {
      return "3ch0";
    } else {
      return string;
    }
  });
  
const wordNumberArray = numberArray.map(number => {
    return numberMap[number] || number;
  });

result = ["h@ck", ...wordNumberArray, "h@ck", ...mutatedStringArray, "h@ck"];
  
console.log(result);

//export result
module.exports = result;