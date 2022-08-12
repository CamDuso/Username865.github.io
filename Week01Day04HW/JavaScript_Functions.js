
// 1.
// const maxOfTwoNumbers = (x , y) => {
//     if (x >= y) {
//       return x;
//     } else {
//       return y;
//     }
//   }
  
//   console.log(maxOfTwoNumbers(3, 9));

//2.
  // const maxOfThree = (x, y, z) => {
  //   if (x > y && x > z){
  //   return x
  //   }
  //   else if (y>z){
  //   return y
  //   }
  //   else {
  //     return z
  //   }
  // }
  // console.log (maxOfThree (5, 11, 9))

//3.
//   const isCharAVowel = (word) => {
//     if(word === "a" || word === "e" || word === "i" || word === "o" || word === "u"){
//     return "True"
//     }
//   else{
//     return "False"
//   } 
// }
// console.log(isCharAVowel("o"))

//4.

// const sumArray = (digits) => {
//   let sum = 0
//   for(let i = 0; i < digits.length; i++)
//   sum += (digits[i])
//   return sum
// }
// console.log(sumArray ([6, 4, 5]))

//5.

// const productArray = (digits) => {
//   let sum = 1
//   for(let i = 0; i < digits.length; i++)
//   sum *= (digits[i])
//   return sum
// }
// console.log(productArray ([6, 4, 5]))

//6.

// const numArgs = (...arg) => {
//   return arg.length
// }
// console.log (numArgs(1, 2, 3, 4))

//7.
// const reverseString = (str) => {
//   return str.split("").reverse().join("");
// };
// console.log (reverseString ("Hello"));

//8.
// const longestStringInArray = (bigString) => {
// let biggestString = ""
//   for(let i = 0; i < bigString.length; i++){
//     if (bigString[i].length > biggestString.length) {
//       biggestString = bigString [i]
//     }
//   }
//       let bigStringSize = biggestString.length
//       return bigStringSize
//     }

// console.log (longestStringInArray (["three", "Word", "fdsjhkdf", "UNACCEPTABLE"]))

//9.

// const words = ["word", "idiot", "unacceptable"]
// function stringsLongerThanThat (number, words) {
//   var bigWords = [];
//   for (var i = 0; i < words.length; i++) {
//     if (words[i].length > number) {
//       bigWords.push(words[i]);
//     }
//   }
//   console.log (bigWords)
// }

// stringsLongerThanThat (4, words)