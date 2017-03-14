/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

function numberToString(num) {
  return String(num);
}

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function increase(num) {
  return ++num;
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

 function decrease(num) {
  return --num;
 }


/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

 function add(value1, value2) {
  return value1 + value2;
 }


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

 function subtract(value1, value2) {
  return value1 - value2;
 }

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

 function multiply(value1, value2) {
  return value1 * value2;
 }

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

 function divide(value1, value2) {
  return value1 / value2;
 }

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

 function square(num) {
  return num * num;
 }


/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

 function calculate(opcode, value1, value2) {

  var result = null;

  switch (opcode) {
    case "add":
      result = value1 + value2;
      console.log(value1 + " + " + value2 + " = " + result);
      return result;
    case "subtract":
      result = value1 - value2;
      console.log(value1 + " - " + value2 + " = " + result);
      return result;
    case "multiply":
      result = value1 * value2;
      console.log(value1 + " * " + value2 + " = " + result);
      return result;
    case "divide":
      result = value1 / value2;
      console.log(value1 + " / " + value2 + " = " + result);
      return result;
    default:
      throw "Invalid operation.";
  }
 }

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

 function isGreaterThan(a, b) {
  return (a > b);
 }


/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

 function isLessThan(a, b) {
  return (a < b);
 }

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

 function areEqual(a, b) {
  return a === b;
 }

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

 function minimum(x, y) {
  return Math.min(x, y);
 }

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

 function maximum(x, y) {
  return Math.max(x, y);
 }

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

 function isEven(n) {
  return n % 2 === 0;
 }


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

 function isOdd(n) {
  return Math.abs(n % 2) === 1;
 }

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

 function letterGrade(score, maxScore) {
  var percentage = (score / maxScore) * 100;

  switch (Math.floor(percentage / 10)) {
    case 10:
    case 9:
      return "A";
    case 8:
      return "B";
    case 7:
      return "C";
    case 6:
      return "D";
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
      return "F";
    default:
      break;
  }
 }

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

 function incrementReviews(restaurant) {

  if (restaurant.reviews === undefined) {
    restaurant.reviews = 0;
  }

  restaurant.reviews++;

  return restaurant;
 }


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

 function combine(word1, word2) {
  return word1 + " " + word2;
 }


/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

function createCircle(radius) {
  // 2 seconds for this function ????

  var circle = {};

  circle.circumference = 2 * radius * Math.PI;
  circle.area = radius * radius * Math.PI;

  return circle;
}