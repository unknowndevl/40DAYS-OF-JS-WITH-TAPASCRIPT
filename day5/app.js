console.log("======================q1===================")
let n=5;
for(let i=0;i<=n;i++)
    {
     let str = " ";
     for(let j=0;j<i;j++)
        {
            str += " * ";
      }
    console.log(str );
    
}

console.log("======================q2===================")
let num=5;
for(let t=1;t<=10;t++){
    console.log(`${num} x ${t} = ${num*t}`)

}
console.log("======================q3===================")
let sum=0;
for(let i=1;i<=500;i++){
    if(i%2!=0){
        sum+=i;
    }
}
console.log(sum);
console.log("======================q4===================")

for(let i=1;i<20;i++){
    if(i%3===0){
        continue;
    
    }
    else{console.log(i)}
    
}
console.log("======================q5===================")
let number=1234;
 let reversed_number=0;
while(number>0){
   let reverse=number%10;
    reversed_number=reversed_number*10+reverse;
    number = Math.floor(number / 10);
}
console.log(reversed_number);