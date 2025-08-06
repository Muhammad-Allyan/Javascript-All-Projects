// ✅ 1. Even or Odd Checker
const evenOddFunc = function (num) {
  if (num % 2 === 0) {
    return "An Even Number!";
  } else {
    return "An Odd Number!";
  }
};
let result = evenOddFunc(12);
console.log(result);

// ✅ 2. Check Positive, Negative, or Zero
let checkPNZNumber = 25;
if (checkPNZNumber > 0) {
  console.log("The number is positive!");
} else if (checkPNZNumber < 0) {
  console.log("The number is negative!");
} else {
  console.log("The number is Zero");
}

// ✅ 3. Check if Number is Divisible by 5 and 3
let checkDivisibleNumber = 15;
if (checkDivisibleNumber % 5 === 0 || checkDivisibleNumber % 3 === 0) {
  console.log("The number is divisible by both 5 and 3");
} else {
  console.log("Not divisible by both");
}

// ✅ 4. Age Eligibility for Voting
let ageEligibility = 17;
if (ageEligibility >= 18) {
  console.log("Eligible to vote!");
} else {
  console.log("Not eligible to vote!");
}

// ✅ 5. Grading System
let checkGrades = 75;
if (checkGrades >= 90) {
  console.log("Grade A");
} else if (checkGrades >= 80) {
  console.log("Grade B");
} else if (checkGrades >= 70) {
  console.log("Grade C");
} else {
  console.log("Failed");
}

// ✅ 6. Check Largest of Two Numbers
let a = 5,
  b = 25;
if (a > b) {
  console.log("You got the greatest number");
} else if (a < b) {
  console.log("You got the lowest number");
} else {
  console.log("Both are equal numbers");
}

// ✅ 7. Check Leap Year
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap year");
} else {
  console.log("No a leap year");
}

// ✅ 8. Check Character is Vowel or Consonant
let char = "e";
if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u"
) {
  console.log("A vowel alphabet");
} else {
  console.log("A consonent alphabet");
}

// ✅ 9. Login Authentication
let userName = "admin";
let password = "12345";
if (userName === "admin" && password === "12345") {
  console.log("Login Successful");
} else {
  console.log("Login Failed");
}

// ✅ 10. Simple Calculator Using Condition
// let value1 = Number(prompt("Enter first value")), operator = prompt("Enter operator any (+,-,*,/):"), value2 = Number(prompt("Enter second value"));
let value1 = 5,
  operator = "*",
  value2 = 5;
if (operator === "+") {
  console.log(value1 + value2);
} else if (operator === "-") {
  console.log(value1 - value2);
} else if (operator === "*") {
  console.log(value1 * value2);
} else if (operator === "/") {
  console.log(value1 / value2);
} else {
  console.log("Invalid operator");
}

// New Exercise
/*
if

else

if...else

else if

nested if

logical operators (AND &&, OR ||, NOT !)

ternary operator

switch (also part of control flow)
  */

//✅ 1. Basic if
let age = 20;

if (age > 18) {
  console.log("You are an adult.");
}


// ✅ 2. if...else

let isRainy = false;

if (isRainy) {
  console.log("Take an umbrella.");
} else {
  console.log("Enjoy the sunshine!");
}

// ✅ 3. if...else if...else

let score = 76;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// ✅ 4. Using Logical AND (&&)
let username = "admin";
let password2 = "12345";

if (username === "admin" && password2 === "12345") {
  console.log("Access granted");
} else {
  console.log("Invalid login");
}

// ✅ 5. Using Logical OR (||)
  let day = "saturday";
  if(day === "saturday" || day === "sunday"){
  console.log("It's weekend");
}
  else{
console.log("Week Days");}

// ✅ 6. Nested if Statements
let userLoggedIn = true;
let hasPremium = false;
if (userLoggedIn) {
  if (hasPremium) {
    console.log("Show premium dashboard");
  }
  console.log("Upgrade to premium");
} else{
  console.log("Login first");
}

// ✅ 7. Using NOT ! Operator

let isEmailVerfied = false;
if (!isEmailVerfied) {
  console.log("Please verify your email");
} else {
  console.log("Correct email");
}