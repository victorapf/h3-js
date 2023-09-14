/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for (let i=0;i<arr.length;i++){
    result[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
}

//export result
module.exports = result;