const myObject = {a:1,b:2};
console.log(myObject['a']);
console.log(myObject['b']);
console.log(myObject);

const myObject2 = myObject;
myObject['a'] = 999;
console.log(myObject['a'],myObject2['b']);
