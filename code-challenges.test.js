// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

//input: fibLength1
//output: Expected output: [1, 1, 2, 3, 5, 8]

// input: fibLength2
// output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibArray", () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    it("Takes in a  number and returns  that length  containing fibinacci sequence in a new array", () => {
        expect(fibArray(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibArray(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// ReferenceError: fibArray is not defined

// b) Create the function that makes the test pass.

// Pseudo ---- >
// Create a function named fibArray
// Pass in a num paramater that will hold a number value when passed in
// Create a new array using the Array object.
// Use the from static method to set the iteration length tho the size of the number being passed
// Use the reduce method to call a call back function on each iteration of the array storing the value from th calculation
// As the function runs concat each iterations return value into a new array.
// use a conditional statement index is greater than one
// use ternary operators to seperate true and false results stored in the array
// If index is greater then 1 then take the addition of the last to values and store that value.
// Outside of testing console log to check the result in the terminal

const fibArray = (num) => Array.from({length: num}).reduce((accumulator,_,i) => accumulator.concat(i  > 1 ? accumulator[i - 1] + accumulator[i - 2]: 1),
[]
)

// PASS  ./code-challenges.test.js
// fibArray
//   ✓ Takes in a  number and returns  that length  containing fibinacci sequence in a new array (5 ms)


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.


describe("orderedOddArray", () => {
    it("passes in an array and returns an array with odd numbers from least to greatest", ()=> {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        // Expected output: [-9, 7, 9, 199]
        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        // Expected output: [-823, 7, 23] 
        expect(orderedOddArray(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(orderedOddArray(fullArr2)).toEqual([-823, 7, 23])
    })
})

// ReferenceError: orderedOddArray is not defined

// b) Create the function that makes the test pass.

// Pseudo ---->
// Create a function named orderedOddArray
// Pass an array paramater
// filter over the array using the filter() method 
// Compare the data type of the value strictly equal to a number data type using typeof 
// use and operator to set another condition for the new array
// use modulo to determine if the value is odd
// If it is odd then use the sort method to properly set its index in the new array
// Set the sort method to <(a,b)=>a-b> if a results in negative one it is smaller if b is negative one it is smaller.
// Outside of testing console log the function and paramater to see the result in the terminal

 const orderedOddArray = (array) => array.filter(value => typeof value === "number" && value % 2 !== 0).sort((a,b)=>a-b)


// PASS  ./code-challenges.test.js
// orderedOddArray
// ✓ passes in an array and returns an array with odd numbers from least to greatest

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// input: numbersToAdd1
// output: [2, 6, 51, 60]

// input: numbersToAdd2
// output: [0, 7, -1, 11]

// input: numbersToAdd3
// []

describe("accumulatingSum", () => {
    it(" returns an array of the accumulating sum of array being passed to the function", ()=> {

        const numbersToAdd1 = [2, 4, 45, 9]
        // Excpected output: [2, 6, 51, 60]

        const numbersToAdd2 = [0, 7, -8, 12]
        // Expected output: [0, 7, -1, 11]

        const numbersToAdd3 = []
        // Expected output: []

        expect(accumulatingSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        //expect(accumulatingSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(accumulatingSum(numbersToAdd3)).toEqual([])
    })
})


// ReferenceError: sumOf is not defined

// b) Create the function that makes the test pass.

// Pseudo ---->
// Create a function named accumulatingSum
// Pass in an array paramater
// map over the array to access the values
// add the indexes value to a newVal variable and store it back in the newVal variable
// set the default newVal variables value to zero at the start when the function is invoked
// Outside of testing console log the function and paramater to see results in the terminal

const accumulatingSum = (array) => array.map(value =>  newVal += value ,newVal = 0)

// accumulatingSum
// ✓  returns an array of the accumulating sum of array being passed to the function (6 m