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

// Exercise: Level 2
console.log('The quote \'There is no exercise better for the heart than reaching down and' +
    ' lifting people up.\' by John Holmes teaches us to help one another.');

console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. ' +
    'Charity and love are the same -- with charity you give love, so don\'t just give ' +
    'money but reach out your hand instead."');

const type = 'number';
let number = '10';
if (typeof number !== type) {
    console.log(Number.parseInt(number));
}

number = '9.8';
console.log(Number.parseFloat(number));
if (Number.parseFloat(number) !== 10) {
    console.log(Math.round(Number.parseFloat(number)));
}

const words = ['python', 'jargon'];
const responseWords = words.map(word => {
    const contains = word.includes('on'),
        response = ' contains word on';

    return contains ?
        word.concat(response) : word.concat(' doesn\'t', response);
});
console.log(responseWords);

sentence = 'I hope this course is not full of jargon';
console.log(sentence.includes('jargon'));

// Math.random generates numbers from 0 to 1 without ever reaching 1
console.log(Math.floor(Math.random() * 101));

console.log(Math.floor(Math.random() * 51) + 50);

console.log(Math.floor(Math.random() * 256));

const language = 'JavaScript';
console.log(language[Math.floor(Math.random() * language.length)]);

console.log('1 1 1 1 1\n' +
    '2 1 2 4 8\n' +
    '3 1 3 9 27\n' +
    '4 1 4 16 64\n' +
    '5 1 5 25 125');

const phrase = 'You cannot end a sentence with because because because is a conjunction';
const because = 'because';
const firstBecause = phrase.indexOf(because);
console.log(phrase.substring(firstBecause, firstBecause + (because.length * 3) + 2));

// Exercise: Level 3
sentence = 'Love is the best thing in this world. Some found their love and some are still ' +
    'looking for their love.';
console.log((sentence.match(/love|Love/g) || []).length);

sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log((sentence.match(/because/g) || []).length);

sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; ' +
    '&as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching ' +
    'm%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? ' +
    '%Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
sentence = sentence.replace(/[^a-zA-Z' ']/g, '');
console.log(sentence);

sentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, ' +
    '15000 euro online courses per month.';
sentence = sentence.replace(/[^0-9' ']/g, '');
sentence = sentence.trim();
let amounts = sentence.split(' ')
    .filter(amount => amount.trim() !== '')
    .map(amount => Number.parseInt(amount.trim()));
console.log(amounts);
let amount = amounts.reduce((acc, income) =>
    acc + income, 0);
console.log(amount);
