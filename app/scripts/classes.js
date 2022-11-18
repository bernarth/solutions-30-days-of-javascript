// Exercises: Level 1, 2 and 3
// Unlike objects literals classes allows us to create many obejcts
// this helps us to reduce the amount of code.
class Animal {
    /**
     * @desc the constructor
     * @param {string} name 
     * @param {number} age 
     * @param {string} color 
     * @param {number} legs 
     */
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    get getName() {
        return this.name;
    }

    /**
     * @param {string} name
     */
    set setName(name) {
        this.name = name;
    }

    get getAge() {
        return this.age;
    }

    /**
     * @param {number} age
     */
    set setAge(age) {
        this.age += age;
    }

    get getColor() {
        return this.color;
    }

    get getLegs() {
        return this.legs;
    }

    eat() {
        console.log('I am eating thanks');
    }

    walk() {
        console.log('I\'m walking thanks');
    }

    makeSound() {
        console.log('I will make a sound');
    }
}

class Dog extends Animal {
    makeSound() {
        console.log('I will bark at you');
    }
}

class Cat extends Animal {}

let dog = new Dog('Argos', 10, 'Brown', 4);
let cat = new Cat('Kitty', 4, 'White', 4);

console.log(dog.getName);
console.log(cat.getName);

dog.makeSound();
cat.makeSound();

class Statistics {
    /**
     * @desc the constructor
     * @param {array} data 
     */
    constructor(data) {
        this.data = data;
    }

    count() {
        return this.data.length;
    }

    sum() {
        return this.data.reduce((prev, value) => prev + value);
    }

    min() {
        return Math.min(...this.data);
    }

    max() {
        return Math.max(...this.data);
    }

    range() {
        return this.max() - this.min();
    }

    mean() {
        return Math.round(this.sum() / this.count());
    }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27,
    24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statistics(ages);

console.log('Count:', statistics.count());
console.log('Sum:', statistics.sum());
console.log('Min:', statistics.min());
console.log('Range:', statistics.range());
console.log('Mean:', statistics.mean());