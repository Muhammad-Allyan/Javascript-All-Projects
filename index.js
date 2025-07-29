/* Task 1
Ask the user to enter a number. Check if it is even or odd.
*/
const userInput = 20;
if(userInput % 2 === 0){
    message = "The number is divisible by 2!" ;
}else
    {
        message = "The number is divisible by 3!";
    }
const task1 = document.getElementById("root");
task1.innerHTML = document.querySelector(".T1Tag").textContent =`Task 1: ` + message;

/* Task 2
Ask for age. If age is 18 or above, allow driving. Else, say "Not allowed".
*/
const checkAge = 19;
if(checkAge <= 20){
ageMessage = "You are allowed to drive!😁";
}
else{
    ageMessage = "You are not allowed to drive!🥲";
}
const task2 = document.getElementById("root2");
task2.innerHTML = document.querySelector(".T2Tag").textContent = `Task 2: ` + ageMessage ;

/*Task 3
 If marks > 90: Grade A, If marks > 75: Grade B, If marks > 60: Grade C, Else: Fail */
const totalGrade = 95;
if(totalGrade > 90){
    marks = "Grade A";
}
else if(totalGrade > 75){
    marks = "Grade B";
}
else if(totalGrade > 60){
    marks = "Grade C";
}
else{
    marks = "Fail ho tum loru!";
}
const task3 = document.getElementById("root3");
task3.innerHTML = document.querySelector(".T3Tag").textContent = `Task 3: ` + marks;
console.log(marks);

/*Task 3
 If marks > 90: Grade A, If marks > 75: Grade B, If marks > 60: Grade C, Else: Fail */