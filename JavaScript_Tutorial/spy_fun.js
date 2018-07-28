var fname = prompt("Please Enter your First Name");
var lname = prompt("Please Enter your Last Name");
var age = Number(prompt("Please Enter your age"));
var height = Number(prompt("Please Enter your height in centimeters"));
var petName = prompt("Please Enter the name of your pet");

if((fname[0] == lname[0]) && (age >= 20 && age <= 30) && height >= 170 && petName.slice(-1) == "y"){
  console.log("Welcome Operative")
}
