/**
* mediante el loop while agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [1,3,5]
*/
let arr = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }];
let result = [];
i = 0;
while (i < arr.length) {
  if (i % 2 === 0) {
    result.push(Object.values(arr[i])[0]);
    i++;
  }
}

console.log(result);
//export result
module.exports = result; 