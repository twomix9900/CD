// Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big".  
// Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function biggieSize(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] > 0 ? arr[i] = "big" : null;
  }
  return arr;
}


// Print Low, Return High - Create a function that takes array of numbers.  
// The function should print the lowest value in the array, and return the highest value in the array.

function printLowReturnHigh(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    arr[i] > max ? max = arr[i] : null;
    arr[i] < min ? min = arr[i] : null;
  }

  console.log(min);
  return max;
}

// Print One, Return Another - Build a function that takes array of numbers.  
// The function should print second-to-last value in the array, and return first odd value in the array.

function printOneReturnAnother(arr) {
  console.log(arr[arr.length - 2]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) return arr[i];
  }
}

// Double Vision - Given array, create a function to return a new array where each value in the original has been doubled.  
// Calling double([1,2,3]) should return [2,4,6] without changing original.

function doubleVision(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] * 2);
  }
  return res;
}

// Count Positives - Given array of numbers, create function to replace last value with number of positive values.  
// Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function countPositives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] > 0 ? count++ : null;
  }
  arr[arr.length - 1] = count;
  return arr;
}

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  
// Every time the array has three evens in a row, print "Even more so!"

function evensAndOdds(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) {
      console.log("That's odd!");
    }
    if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0 && arr[i + 2] % 2 === 0) {
      console.log("Even more so!");
    }
  }
}
// Increment the Seconds - Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).  
// Afterward. console.log each array value and return arr.

function incrementTheSeconds (arr) {
  for (let i = 0; i < arr.length; i++) {
    i % 2 === 1 ? arr[i] = arr[i] + 1 : null;
    console.log(arr[i]);
  }
  return arr;
}

// Previous Lengths - You are passed an array containing strings.  Working within that same array, replace each string with a number - 
// the length of the string at previous array index - and return the array.

function previousLengths(arr) {
  let res = [];
  for (let i = 1; i < arr.length; i++) {
    res.push(arr[i - 1].length);
  }
  return res;
}

// Add Seven to Most - Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

function addSevenToMost(arr) {
  let res = [];
  for (let i = 1; i < arr.length; i++) {
    res.push(arr[i] + 7);
  }
  return res;
}

// Reverse Array - Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  
// Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
// [1,3,10,11] --> [11,10,3,1]
// [3,1,6,4,2] --> [2,4,6,1,3]
function reverseArray(arr) {
  let temp;
  for (let i = 0; i <= arr.length / 2 - 1; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
  }
  return arr;
}


// Outlook: Negative - Given an array, create and return a new one containing all the values of the provided array, 
//  made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function outlookNegative(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] > 0 ? arr[i] = -arr[i] : null;
  }
  return arr;
}

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  
// If no array elements are "food", then print "I'm hungry" once.

function alwaysHungry(arr) {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "food") {
      flag = true;
      console.log("yummy")
    }
  }

  flag === false ? console.log("I'm hungry") : null
}


// Swap Toward the Center - Given array, swap first and last, third and third-to-last, etc.  
// Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

function swapTowardTheCenter(arr) {
  let temp;
  for (let i = 0; i <= arr.length / 2 - 1; i+=2) {
    temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
  }
  return arr;
}

// Scale the Array - Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.  
// For example, scaleArray([1,2,3],3) should return [3,6,9].
function scaleTheArray(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * num;
  }
  return arr;
}

