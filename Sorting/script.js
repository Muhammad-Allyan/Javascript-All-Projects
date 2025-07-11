// var x = 5;
// console.log(x instanceof x);
// Logical Operator
function logicOperator() {
    var x = true;
    var y = false;
    document.getElementById("logic_op").innerHTML = x && y;
    // document.getElementById("logic_op").innerHTML=   x || y  ;
}
logicOperator();
var x = true;
var y = false;
console.log(x || y);
console.log(x && y);

// Ternary Operator

// Ternary Operator in function
function ageCheck(age) {
    const result = (age >= 18) ? "Adult" : "Not Adult";
    return result;
}
var check = ageCheck(18);

if (check == "Adult") {
    console.log("he/she is adult")
} else {
    console.log("not adult")
}
ageCheck();
// function checkFunc2(){
//     const result2 = check == "Adult" ? "He/She is an adult!" : "He/She not an adult!";
//     return result2;
// }
// console.log(checkFunc2());

// Ternary Operator with function call
function sayHello (name){
    console.log(`Hello! ${name}`);
}
function sayGoodbye(name){
    console.log(`Goodbye! ${name}`);
}
var isLeaving = false;
isLeaving ? sayGoodbye("Allyan") : sayHello("Allyan");

// Other way
let name1 = "Allyan"
// const isLeaving = true; 
let message;
if (!isLeaving){
    message = `Goodbye! ${name1}`;
}else{
    message = `Hello! ${name1}`;
}
console.log(message);
// if(isLeaving){
//     console.log(sayGoodbye(name));
// }else{
//     console.log(sayHello(name));
// }
// Comma operator ,
let n1, n2;
const res = (n1 = 3, n2 = 2, n1 + n2);
console.log(res);6



//first sort and then find min and max number from this array [6,4,3,8,9,10]
const numbers = [6,4,3,8,9,10];
numbers.sort((a,b) => a - b); 
console.log(" Kuch bh ",     numbers);
// numbers.sort(function (a,b){
//     return a - b;
// });

console.log(numbers);
//  Bubble Sorting
const bubbleNumbers = [6, 4, 3, 8, 9, 10];

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    console.log(`------------------------------------${i}`)
    for (let j = 0; j < n - 1 - i; j++) {
        console.log('arr[j] > arr[j + 1]', arr[j] > arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        // Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

  }
  return arr;
}

console.log(bubbleSort(bubbleNumbers));


// Loop
for(let i = 0; i < 5 ; i++){
console.log("Hello");
}

// let i = 0;

// while (i < 5) {
//   console.log("i is: " + i);
//   i++;
// }
let i = 0;

do {
  console.log("Running once at least, i = " + i);
  i++;
} while (i < 5);


//
const people = [{name: "Allyan", age: 25, gpa:3.25},{name: "Irfan", age:27, gpa:3.5},{name: "Ali", age:22, gpa:2.5}];
people.sort((a,b) => a.name.localeCompare (b.name));
console.log(people);

