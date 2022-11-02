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

