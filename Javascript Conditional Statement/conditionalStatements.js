// ✅ 1. Even or Odd Checker
const evenOddFunc = function (num) { 
if (num % 2 === 0) {
  return "An Even Number!";
} else {
  return "An Odd Number!";
}
}
let result = evenOddFunc(12);
console.log(result);

// ✅ 2. Check Positive, Negative, or Zero
let checkPNZNumber = 25;
if (checkPNZNumber > 0) {
  console.log("The number is positive!");
}
else if (checkPNZNumber < 0) {
  console.log("The number is negative!");
} else{
  console.log("The number is Zero");
}

// ✅ 3. Check if Number is Divisible by 5 and 3
let checkDivisibleNumber = 15;
if (checkDivisibleNumber % 5 === 0 && checkDivisibleNumber % 3 === 0 ) {
  console.log("The number is divisible by both 5 and 3");
}
else{
  console.log("Not divisible by both");
}

// ✅ 4. Age Eligibility for Voting
let ageEligibility = 17;
if (ageEligibility >= 18) {
  console.log("Eligible to vote!");
}
else{
  console.log("Not eligible to vote!");
}

// ✅ 5. Grading System
