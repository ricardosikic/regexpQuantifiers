// find the 3 dots in a row
let string = "Hello!... Wait. How goes?..... GoodBye!..";
let newArr = string.match(/[^a-z, " ", "?!"]/gi);
let dotFind = newArr.join('').match(/.{3}/g).length;
console.log(dotFind);



// find and quantify the group of 3 exclamation chars
let newString = "Hello!!!, how are...today !!!? i am 101 years old";
let newArray = newString.match(/[^a-z, " ", ., ?, 0-9]/gi);
let findExclamation = newArray.join('').match(/!{3}/gi).length;
console.log(findExclamation);



