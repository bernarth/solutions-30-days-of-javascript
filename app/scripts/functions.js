// Exercises: Level 3
/**
 * @desc Generates a random color in certain code color
 * @param {string} colorCode
 * @param {number} numOfColors
 * @returns {string}
 */
function generateColors(colorCode, numOfColors) {
    if (numOfColors < 1) {
        return 'Invalid number of colors';
    }

    let generated;
    switch (colorCode.trim().toLowerCase()) {
        case 'hexa':
            generated = getRandomColors(numOfColors, generateHexaString);
            break;
        case 'rgb':
            generated = getRandomColors(numOfColors, generateRgbString);
            break;
        default:
            generated = 'Unknown color code';
            break;
    }

    return generated;
}

/**
 * @desc Gets random color in certain code
 * @param {number} numOfColors 
 * @param {*} generateColorString 
 * @returns {string}
 */
const getRandomColors = (numOfColors, generateColorString) => {
    if (numOfColors === 1) {
        return generateColorString();
    }

    let response = '[';
    for (let index = 0; index < numOfColors; index++) {
        const code = generateColorString();
        response += index === numOfColors - 1 ? code : code.concat(', ');
    }

    return response + ']';
};

/**
 * @desc Generates a hexadecimal color
 * @returns {string}
 */
function generateHexaString() {
    const codes = generateRgbArray();
    return '\'' + rgbToHexa(codes[0], codes[1], codes[2]) + '\'';
}

/**
 * @desc Generates a rgb color
 * @returns {string}
 */
function generateRgbString() {
    const codes = generateRgbArray();
    return '\'' + `rgb(${codes[0]}, ${codes[1]}, ${codes[2]})` + '\'';
}

/**
 * @desc Converts rgb to hexadecimal format
 * @param {number} red 
 * @param {number} green 
 * @param {number} blue 
 * @returns {string}
 */
function rgbToHexa(red, green, blue) {
    return '#' + (1 << 24 | red << 16 | green << 8 | blue).toString(16).slice(1);
}

/**
 * @desc Generates an rgb random color
 * @returns {array}
 */
function generateRgbArray() {
    const red = getRandomNumber(),
        green = getRandomNumber(),
        blue = getRandomNumber();

    return [red, green, blue];
}

/**
 * @desc Gets a random number between 0 and 255
 * @returns {number}
 */
const getRandomNumber = function () {
    return Math.floor(Math.random() * 256);
};


console.log(generateColors('hexa', 3));
console.log(generateColors('hexa', 1));
console.log(generateColors('rgb', 3));
console.log(generateColors('rgb', 1));
