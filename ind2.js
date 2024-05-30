// create a function that takes a string and returns the first character that repeats. if there are no repeats of a character then return -1
// const doubleCheck = (chars) => { // stating the function and parameter names
//     for (let i = 1; i < chars.length; i++) { // iterating through the string, starting at index 1
//         if(chars.slice(0,i).includes(chars[i])){ // slices the string and compares the section with the current index
//             return chars[i] // returns the current index
//         }
//     }
//     return '-1' // what is returned if there is no match
// }

// console.log(doubleCheck('Nathaniel'));

/**
 * i = 1 char = "l"
 * char.slice(0,1) is "a"
 * includes(char[i]) "l"
 * 
 *  i = 2 char = "i"
 * char.slice(0,2) is "al"
 * includes(char[i]) "i"
 * 
 *  i = 3 char = "a"
 * char.slice(0,3) is "ali"
 * includes(char[i]) "a"
 */
// create a function that reverses letters but not numbers in a string


// const createMask = (str) => {
//     let mask = [];
//     for (i = 0; i < str.length; i++) {
//         if (isNaN(str[i])) {
//             mask.push(0);
//         } else {
//             mask.push(1);
//         }
//     }
//     return mask.join();
// };
       
// const reverseLetters = (str) => {};
       

function numbers(n) {
    return n >= '0' && n <= '9' // returns a True/False for each character checked if it is a number
}

function reverseWord(str) {
    let temp = [] // storage for non-numeric string parts

    for (let i = 0; i < str.length; i++) {
        if (!numbers(str[i])){
            temp.push(str[i]);
        }
    }
    
    let result = []
    for (let i = 0; i < str.length; i++) {
        if (!numbers(str[i])){
            result += temp.pop()
        } else {
            result += str[i]
        }
    }
    return result
}

console.log(reverseWord('uihds214ihu53'));