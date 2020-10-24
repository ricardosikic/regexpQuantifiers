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



// count how many times "de" appears (12 times)
let text = "Los datos se van distribuyendo a lo largo de la noticia por el grado de interés que tengan. Este esquema se conoce en la profesión como la estructura de la pirámide invertida y pretende cumplir dos objetivos: el primero y más importante es que de esta forma el lector puede informarse de lo más importante de la noticia con rapidez, si por cualquier motivo interrumpe la lectura en el cuarto o quinto párrafo se habrá enterado de los aspectos más importantes referidos a ese acontecimiento. Si prosigue su lectura, podrá completar su información enterándose de más matices y profundizando sobre el acontecimiento.";

const findWord = text.match(/de{1}/gi);
console.log(findWord.length);