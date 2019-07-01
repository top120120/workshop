let number = "123.34";
let numToWord = {
    ".":"dot",
    "1":"one",
    "2":"two",
    "3":"three",
    "4":"four"
}
for (var i=0;i<number.length;i++){
    console.log(numToWord[number[i]]);
}