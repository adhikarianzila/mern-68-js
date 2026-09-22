/**
 * Decision making statements
 * a. If-else
 * b. Else-if
 * c. Switch-case
 * d.Loop
 * 
 * truthy value 
 * falsy value
 * false,0, empty strings,'' ,"",``,null,undefined,NaN, and variables containing these values
 */

let bool = 0;
if (bool){
// if (bool===true){
    console.log('Run if true')
}else{
    console.log("Run if not true")
}


let today = "Monday"

if(today === "Friday") {
    console.log('Weekend')
} 
else if (today == "Sunday" || today == "Saturday"){
    console.log("holiday");
}
else if(today === "Monday"){
    console.log("other day")
}
// Task Print division based on percentage
//consider 500 as total, and 350 as obtained score
//print distinction if percentage is >= 80
//print first distinction if percentage is between 60 to 80(exclusive)
//print second distinction if percentage is between 45 to 60(exclusive)
//print third distinction if percentage is between 32 to 45(exclusive)
//print sorry! you are failed if percentage is <32

let total = 500;
let obtainedScore = 350;
const percentage = (obtainedScore / total)*100 ;
console.log(percentage);

if (percentage >= 80 ){
    console.log("Distinction")
} else if (percentage >= 60) {
    console.log("First Division")
}else if (percentage >= 45) {
    console.log("Second Division")
}else if (percentage >= 32) {
    console.log("Third Division")
}else{
    console.log("Sorry! You are failed")
}


switch (true) {
    case percentage >= 80 :
       console.log("Distinction");
       break;
    case percentage >= 60 :
        console.log("First Division")

       break;
    default:
        console.log("Sorry! You are failed")


}
