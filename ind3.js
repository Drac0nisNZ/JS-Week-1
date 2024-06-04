// write a function to rotate an array either left or right according to the number provided in the function
// Ex sampleArray([0,1,2,3,4,5,7,9], 2) -> [7,9,0,1,2,3,4,5]

// function numShift(arr, n) {
//     let result = arr;
//     for(let i = 0; i < n; i++) {
//         let lastNumber = arr.pop();
//         arr.unshift(lastNumber)
//         result = arr
//     }
//     return result
// }

// console.log(numShift([0,1,2,3,4,5,7,9], 2))

//create a function that takes an array of values removes all duplicate values and returns a new array in the same order as the old array
const array = [1, 2, 3, 2, 4, 5, 4, 5];
const duplicates = array.filter((item, index) => array.indexOf(item) === index);

console.log(duplicates); 