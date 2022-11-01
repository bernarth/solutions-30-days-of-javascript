// More of variables - string
// Exercise: Level 1
let challenge = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);

let capitalized = challenge.toUpperCase();
console.log(capitalized);

let toLowerCase = challenge.toLowerCase();
console.log(toLowerCase);

let cut = challenge.substring(3);
console.log(cut);

cut = challenge.substring(0, 2);
console.log(cut);

let word = 'Script';
let response = `Does string contains the word ${word}? ${challenge.includes(word)}`;
console.log(response);

console.log(challenge.split(''));

console.log(challenge.split(' '));

let empires = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(empires.split(', '));

console.log(challenge.replace('JavaScript', 'Python'));

console.log(challenge.charAt(15));

console.log(challenge.charCodeAt(11));

console.log(challenge.indexOf('a'));

console.log(challenge.lastIndexOf('a'));

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

console.log(sentence.lastIndexOf('because'));

console.log(sentence.search('because'));

console.log(challenge.trim());

console.log(challenge.startsWith('3'));

console.log(challenge.endsWith('t'));

console.log(challenge.match(/a/g));

console.log('30 Days Of'.concat(' ', 'JavaScript'));

console.log(challenge.repeat(2));

