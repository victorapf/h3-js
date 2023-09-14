/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for (let i=1;i<arr.length -1 ;i++){ 
    result.push(arr[i])
}

result[0] = result[0].replace("a", "@");
result[1] = result[1].replace("a", "@");
result[result.length - 1] = result[result.length - 1].toUpperCase();

//export result
module.exports = result;