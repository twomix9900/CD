// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

(function countTo255() {
  let arr = [];
  for (let i = 0; i < 256; i++) {
    arr.push(i);
  }
  return arr;
})();

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  
// You may use a modulus operator for this exercise.

(function sumAllEvensTo1000 () {
  let sum = 0;
  for (let i = 2; i < 1001; i += 2) {
    sum += i;
  }
  return sum;
})();

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

(function sumOdd5000 () {
  let sum = 0;
  for (let i = 1; i < 5001; i += 2) {
    sum += i;
  }
  return sum;
})()

// Iterate an array - Write a function that returns the sum of all the values within an array. 
// (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function iterateArray (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. 
// (e.g. for [-3,3,5,7] max is 7)

function findMax(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    max < arr[i] ? max = arr[i] : null;
  }

  return max;
}

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. 
// (e.g. for [1,3,5,7,20] average is 7.2)

function findAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total/arr.length;
}

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. 
// (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function returnOddNumbers(arr) {
  let arr = [];
  for (let i = 0; i < arr.length; i+=2) {
    arr.push(arr[i])
  }
  return arr;
}

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. 
// For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. 
// (There are two values in the array greater than 3, which are 5, 7).

function greaterThanY(arr, y) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] > y ? count++ : null;
  }
  return count;
}

// Squares - Given an array with multiple values, write a function that replaces each value in the array with the product of the 
// original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function squareArray (arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] * arr[i]);
  }
  return res;
}

// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0.
// When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function negativesArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] < 0 ? arr[i] = 0 : null;
  }
  return arr;
}


// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, 
// and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxMinAvg(arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] > max ? max = arr[i] : null;
    arr[i] < min ? min = arr[i] : null;
    sum += arr[i];
  }

  return [max, min, sum/arr.length];
}

// Swap Values - Write a function that will swap the first and last values of any given array. 
// The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swapValues(arr) {
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;

  return arr;
}


// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. 
// For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function numberToString(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] < 0 ? arr[i] = "Dojo" : null;
  }
  return arr;
}
