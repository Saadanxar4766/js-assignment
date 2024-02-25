//Alert
alert("Wellcome to javascript basic assignment")

//Variable for Num
var num1 = 10 , num2 = 5
consol.log("Addition", num1 + num2)
consol.log("Subtraction",num1 - num2)
consol.log("Multiplication", num1 * num2)
consol.log("Division", num1 / num2)


//Varriable for String
var name = ("Saad Ansari")
consol.log(name)

//Variable Names legel and inlegel
var varNumOne = "" // Camelcasse
var var_num_two = "" // Snackcase
var varnumthree = "" // Pascalcase

//Varilable for Math Expression Famillar operator
var result = ((num1+num2) * num1) / num2 - num1;
console.log(result)

 // 6. Math Expressions: Unfamiliar Operators
  // % (modulus) operator returns the remainder of a division
  var remainder = num1 % num2;
  console.log("Remainder:", remainder);
  
//Post increment & pre increment
var x = 7;
var postIncrement = x++;
var postPreIncrement = ++x;
console.log("Post Increment:", postIncrement);
console.log("Pre Increment:", preIncrement);

//Concatenating Text Strings
var firstName = "Saad "
var lastNamet = "Ansari"
var fullName = firstName + lastNamet;
console.log(fullName);

//Promt
var userAge = prompt("Enter your age")
console.log(userAge)



//if statement
var userNumber = ("Enter your num")
var reminder =(userNumber % 2)
var massage = ""
if(reminder == 0){
    massage = "your num is even"
}else("your num is odd")
alert(massage)


// 10. if...else and else if statements
var userGrade = prompt("Enter your numerical grade:");
if (userGrade >= 90) {
  console.log("A");
} else if (userGrade >= 80) {
  console.log("B");
} else if (userGrade >= 70) {
  console.log("C");
} else if (userGrade >= 60) {
  console.log("D");
} else {
  console.log("F");
}































