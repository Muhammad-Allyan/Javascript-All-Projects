// const bubbleNumbers = [6, 4, 3, 8, 9, 10];
// function bubbleSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // Swap
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }

//   }
//   return arr;
// }

// console.log(bubbleSort(bubbleNumbers));

//

const bubbleNumbers = [10, 9, 6, 7, 5, 8, 1, 4, 2, 3];
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(bubbleNumbers));

//


//Pyramid Structure
// let rows = 5;
// let output = "";  // define this BEFORE loops

// for (let i = 1; i <= rows; i++) {
//   for (let j = 1; j <= i; j++) {
//     output += "*";  // accumulate stars
//   }
//     output += "\n"; // go to the next line after each row
// }

// document.getElementById("pyramid").innerText = output;



// Pyramid
let rows = 6;
let output = "";
for (let i = 1; i <= rows; i++) {
  
}
console.log(output);
document.getElementById("pyramid").innerText = output;

// Reverse Pyramid 
let revRow = 6;
let revOutput = "";
for (let i = rows; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    revOutput += "*";
  }
  revOutput += "\n";
}
console.log(revOutput);

