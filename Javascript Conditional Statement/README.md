# What i've learn in this task.

* The return statement cannot accessed outside the function which is not allowed in JavaScript.

``` let num = 7;
if (num % 2 === 0){
return "Even";
}
else{
    return "Odd";
}
```
<span style ="color:red">Uncaught SyntaxError:</span> Illegal return statement

* You can use directly console log for above statement or can wrap your code inside a function and then you can return the value.