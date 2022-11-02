/* eslint-disable no-undef */
// Exercises: Level 1
let firstName = 'Alberth',
    lastName = 'Condori',
    country = 'Bolivia',
    city = 'La Paz',
    age = 23,
    isMarried = false,
    year = 2022;
console.log(typeof firstName,
    typeof lastName,
    typeof country,
    typeof city,
    typeof age,
    typeof isMarried,
    typeof year);

console.log(typeof '10' === typeof 10);

console.log(Number.parseInt('9.8') === 10);

console.log(10 === Number.parseInt('10'),
    typeof null === 'object',
    !undefined);

console.log(10 === '10',
    typeof {} !== typeof [],
    [].length !== 0);

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay() + 1);
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime() * 0.001);

// Exercises: Level 2
const baseString = prompt('Enter base:'),
    heightString = prompt('Enter height:'),
    base = Number.parseInt(baseString) || 0,
    height = Number.parseInt(heightString) || 0;
alert('The area of the triangle is ' + (base * height) / 2);

const aInput = prompt('Enter side a:'),
    bInput = prompt('Enter side b:'),
    cInput = prompt('Enter side c:'),
    a = Number.parseInt(aInput) || 0,
    b = Number.parseInt(bInput) || 0,
    c = Number.parseInt(cInput) || 0;
alert('The perimeter of the triangle is ' + (a + b + c));

// Exercises: Level 3
console.log(now.toISOString().split('T')[0], `${now.getHours()}:${now.getMinutes()}`);
