// Exercises: Level 1
const number = 12;
if (number % 2 === 0) {
    console.log(`${number} is an even number`);
}
else {
    console.log(`${number} is an odd number`);
}

// Exercises: Level 2
const score = 65;
let letterScore;

if (score >= 0 && score < 50)
    letterScore = 'F';
else if (score >= 50 && score < 60)
    letterScore = 'D';
else if (score >= 60 && score < 70)
    letterScore = 'C';
else if (score >= 70 && score < 90)
    letterScore = 'B';
else if (score >= 90 && score <= 100)
    letterScore = 'A';
else
    letterScore = '';

console.log(score, letterScore);

// Exercises: Level 3
let months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
];
// eslint-disable-next-line no-undef
const month = prompt('Enter a month:').toLowerCase(),
    getMonth = (months, month) => {
        const numberOfMonth = months.indexOf(month.toLowerCase());
        return numberOfMonth > -1 ? numberOfMonth + 1 : 0;
    },
    numberOfDays = new Date(2022, getMonth(months, month), 0).getDate();
console.log(`${months[getMonth(months, month) - 1]} has ${numberOfDays} days.`);