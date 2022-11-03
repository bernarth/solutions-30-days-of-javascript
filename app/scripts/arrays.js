// Exercises: Level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((first, second) => first - second);
console.log('Array sorted', ages);
console.log('Min age', ages[0]);
console.log('Max age', ages[ages.length - 1]);

const findMidAge = (ages) => {
    const midLength = Math.floor(ages.length / 2);
    if (midLength * 2 === ages.length) {
        return ages.length === 0 ?
            0 : (ages[midLength] + ages[midLength - 1]) / 2;
    }

    return ages[midLength];
};
console.log(findMidAge(ages));

const averageAge = (ages) => {
    return ages.reduce((acc, age) => acc + age) / ages.length;
};
console.log(averageAge(ages));
