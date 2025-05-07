
let day = "Monday";
switch (day) {
    case "monday":
        console.log("It's the start of the week.");
        break;
    default:
        console.log("It's a normal day.");
}
console.log("the answer is its a normal day  because javascript is a case senstive language the monday in the case is different from Monday inside the day variable");

console.log("=======================questi0n2===============================");
console.log("ATM Cash Withdrawal System")

console.log("assuming his account have enough balance and he enter a vaild pin")
let amount = 3000;
if (amount % 100 === 0) {
    console.log(" Withdrawal successful")
}
else {
    console.log("Invalid amount ");
}
console.log("=======================question3===============================");

let operator = "**";
let a = 20;
let b = 10;
switch (operator) {
    case "+": console.log(a + b);
        break;

    case "-": console.log(a - b);
        break;
    case "*": console.log(a * b);
        break;
    case "/": console.log(a / b);
        break;
    case "%": console.log(a % b);
        break;
    case "**": console.log(a ** b);
        break;

    default: console.log("enter a valid operator");

}
console.log("=======================question4===============================");
let age = 18;
if (age < 18) {
    console.log("your ticket price is $3");
} else if (age >= 18 && age <= 60) {
    console.log("your ticket price is $10");
} else if (age > 60) {
    console.log("your ticket price is $8");
} else {
    console.log("please enter a valid age ");
}
console.log("=======================question5===============================");

console.log("Horoscope Sign Checker");

let birthmonth = "march";
switch (birthmonth) {
    case "january": console.log("your zordic sign is: Aquarius");
        break;
    case "febuary": console.log("your zordic sign is: Pisces");
        break;
    case "march": console.log(" your zordic sign is: Aries ");
        break;
    case "april": console.log(" your zordic sign is:  Taurus ");
        break;
    case "may": console.log(" your zordic sign is: Gemini");
        break;
    case "june": console.log("your zordic sign is: Cancer ");
        break;
    case "july": console.log("your zordic sign is: Leo");
        break;
    case "august": console.log("your zordic sign is: Virgo");
        break;
    case "september": console.log("your zordic sign is: Libra  ");
        break;
    case "october": console.log("your zordic sign is: Scorpio");
        break;
    case "november": console.log("your zordic sign is: Sagittarius");
        break;
    case "december": console.log("your zordic sign is: Capricorn");
        break;
    default: console.log("please enter a valid month ");

}
console.log("=======================question6===============================");

let side1 = "12 ";
let side2 = "12 ";
let side3 = " 6 ";
if (side1 === side2 && side2 === side3) {
    console.log("Equilateral Triangle");
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}