// Write a function that counts integer number of didgits
// EX: intCount(303) -> 3
// intCount(1500) -> 4
// const countDigits = (int) => {
//     return (int.tostring()).length
// }

// function numDigits(x) {
//     return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
//   }

  
//   function intCount(n) {
//     let positive = math.abs(n);
//     let numString = positive.toString;
//     return numString.length
//   }

//   const digitCount = (n) => {
//     if (Number.isInteger(n)) {
//         if(n > 0) { // checks if the number is positive
//             let digits = 1
//             while(n > 10) {
//                 digits++
//                 n/= 10 // divides n by 10 and counts the number of times it repeats
//             }
//             return digits
//         } else if(n < 0) { // checks if number is negative
//             let digits = 1
//             while(n < -10) {
//                 digits++
//                 n/= 10
//             }
//             return digits
//         } else {
//             return 1
//         }
//     }
//   }

  // 1 create a function that takes an array of integers as an argument and returns the array in ascending order using sort() method
  // 2 do the same with es5
//   function compareNumbers(a, b) {
//     return a - b;
//   }
  
// const arraySort = [25, 16, 49, 24, 354, 159];
// arraySort.sort(compareNumbers);

// console.log(arraySort);
function swap(arr, firstInd, secondInd){
    var temp = arr[firstInd];
    arr[firstInd] = arr[secondInd];
    arr[secondInd] = temp;
}
function numSort(arraytest){
    var len = arraytest.length, i, j, stop;
    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arraytest[j] > arraytest[j+1]){
                swap(arraytest, j, j+1);
            }
        }
    }
    return arraytest;
}

console.log(numSort([25, 16, 49, 24, 354, 159]));