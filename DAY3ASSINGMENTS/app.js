console.log(" ====================solution of q1============================== ");
let number=90;
if(number%2==0){
    console.log(`number ${number} is  divided by 2`);

}
else{
    console.log(`number ${number} is not divided by 2`);

}
console.log(" ====================solution of q2============================== ");

let age =16;
if(age>=18){
    console.log("you are eligible to get a driving license");
}
else{
    console.log("you are not  eligible to get a driving license");
}
console.log(" ====================solution of q3============================== ");
 
let monthly_salery=12300;
let yearly_salery=12300*12;
let bonus=yearly_salery*0.2;
let ctc=yearly_salery+bonus;
console.log(`your yearly salery is ${ yearly_salery}   you got a bonus of ${bonus} and you total ctc is ${ctc} `  );

console.log(" ====================solution of q4============================== ");

let color="red";
if(color==="red"){
    console.log("STOP");
}
else if(color==="green"){
    console.log("GO");
}
else{
   console.log(`no trafic light color  is${color}`) ;
}
console.log(" ====================solution of q5============================== ");

         console.log("=====Electricity Bill Calculator=======");
     
         let units=5;
        //  let units =prompt("enter unit consume per day")
        let bill_for_month=units*150*30;
        let yearly_bill=bill_for_month*12;
        let discount=yearly_bill*0.20
        let yearly_bill_after_discount=yearly_bill-discount;
        
        console.log( "your yearly bill after discount is" + " "+yearly_bill_after_discount);

        console.log(" ====================solution of q6============================== ");
        console.log("=====leap year cheak=======");
        let year=2025
        leap_year=(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))?"leapyear":"not aleap year";
        console.log(leap_year);
        console.log(" ====================solution of q7============================== ");

        let p=10;
        let q=20;
        let r=5;

        if(p>q&&p>r){
            console.log("number p is greater");
        }
        else if(q>p&&q>r){
            console.log("q is greater");
        }
        else if(r>q&&r>p){
            console.log("r is greater ");
        }
        else{
            console.log("all are equal");
        }

        console.log(" ====================solution of q8============================== ");
        let count =5;
        let double =5<<1;
        console.log(double);
