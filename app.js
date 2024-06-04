// create a function that takes 3 collections of arguments and returns the sum of the product of numbers.
//add the result of the first number in each collection multiplied by each other to the result of the second number in each collection
// EX: product (1,2)(1,1)(2,3)

// function product(num1, num2) {
//     return(num3, num4) => {
//         return(num5, num6) => {
//             return (num1*num3*num5) + (num2*num4*num6)
//         }
//     }
// }

// console.log(product(1, 2)(1, 1)(2, 3))

// const productTwo = (num1,num2) => (num3,num4) => (num5,num6) => (num1*num3*num5)+(num2*num4*num6)

// console.log(productTwo(1, 2)(1, 1)(2, 3))
//create a function that takes an array of strings and returns an array, sorted from shortest to longest
// stringSort(['Ali', 'Kahwaji', 'NMIT']) -> (['Ali', 'NMIT', 'Kahwaji'])

// function stringSort([arr]) {
//     const arrayLength = Object.keys(stringSort).length;
//     var swap;
//     var newLen = arrayLength-1;
//     var sortedStrArrByLenght=stringSort;
//     do {
//         swap = false;
//         for (var i=0; i < newLen; i++)
//         {
//             if (sortedStrArrByLenght[i].length > sortedStrArrByLenght[i+1].length)
//             {
//                var temp = sortedStrArrByLenght[i];
//                sortedStrArrByLenght[i] = sortedStrArrByLenght[i+1];
//                sortedStrArrByLenght[i+1] = temp;
//                swap = true;
//             }
//         }
//         newLen--;
//     } while (swap);
//   return sortedStrArrByLenght;
// }

// console.log(stringSort(['Ali', 'Kahwaji', 'NMIT']))

//write a function that sums up all the values in the array
// addArrays([1,2,3,4,10,11]) -> 31

// function addArrays(arr) {
//     var sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum
// }

// const addArrays = arr => {
//     let sum = 0
//     arr.forEach((el) => {
//         sum += el
//     })
//     return sum
// }

// console.log(addArrays([1,2,3,4,10,11]))

