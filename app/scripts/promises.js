/**
 * * A Promise is a way to handle asynchronous operations.
 * This lets asynchronous methods return values like asynchronous methods: instead of
 * immediately returning the final value, the asynchronous method returns a promise
 * to supply the value at some point in the future.
 * 
 * * A Promise is one of this states:
 * - Pending: initial state, neither fullfield nor rejected.
 * - Fullfield: meaning that the operation completed successfully.
 * - Rejected: meaning that the operation failed.
 */

/**
 * * Callbacks
 * It´s a function passed to another function as an argument.
 * Then this function is invoken within the external function.
 */

const doSomething = callback => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS'];
        callback('It did not go well', skills);
    }, 2000);
};

const callback = (err, result) => {
    if (err) {
        return console.log(err);
    }

    return console.log(result);
};

doSomething(callback);

/**
 * * Promise constructor
 * We can create a promise using the Promise constructor.
 * It takes a callback as parameter. It has two parameters:
 * resolve and reject.
 */

const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS'];
        if (skills.length > 0) {
            resolve(skills);
        }
        else {
            reject('Something wrong happened');
        }
    }, 2000);
});

doPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));

/**
 * * Async and Await
 * Async and await is an elegant way to handle promises. It's easy
 * to undesrstand and write.
 */
const url = 'https://restcountries.com/v2/all';
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error(error));

const fetchData = async () => {
    try {
        const response = await fetch(url);
        const countries = await response.json();
        console.log(countries);
    }
    catch (err) {
        console.error(err);
    }
};
console.log('===== async and await =====');
fetchData();

// Exercises: Level 1, 2 and 3
const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// Read the cats api and find the average weight of cat in metric unit.
const getAverage = async () => {
    try {
        const response = await fetch(catsAPI);
        const catsWeight = (await response.json()).map(cat => cat.weight.metric);
        console.log(catsWeight);
    }
    catch (err) {
        console.log(err);
    }
};

getAverage();

// Read the countries api and find out the 10 largest countries
async function getLargestCountries() {
    try {
        let countries = await fetch(countriesAPI).then(response => response.json());
        countries.sort(_compareCountries);
        return countries.slice(0, 10);
    }
    catch (err) {
        return err;
    }
}

function _compareCountries (next, current) {
    if (current.area > next.area) {
        return 1;
    }
    else if (current.area < next.area)  {
        return -1;
    }

    return 0;
}

const countries = async () => {
    const response = await getLargestCountries();
    console.log(response);
};

countries();
