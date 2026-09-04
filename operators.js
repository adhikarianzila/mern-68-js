/**
 * Arithematic Operator/Mathematical Operators
 * +,-,*,/,%
 * Increment or Decrement Operators
 * ++,--
 * Assignment Operators
 * 
 * Comparison Operator
 * <,>,<=,>=,==,!=,===,!==
 * String or Concatenation Operator
 * + ,{, comma is also used as concatenation as it gives space in browser}
 * Logical Operators
 * &&, ||,!
 * Ternary or Conditional Operator (only operator used in React)
 * (expression) ?true : false

*/

let a = 10;
let b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


let c = 10;
let ac = c + 1;
console.log(c++); //output 10 ,post assign
console.log(++c); //output 12, pre assign

let x = 10;
let y = "10";
console.log(x < y);
console.log(x > y);
console.log(x <= y);
console.log(x >= y);
console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);

console.log("Hello", "There");
console.log("Hello" + "There");

console.log(x === y && x !== y && x == y); //false & false && true => false
console.log(x === y || x < y || x == y); //false & true &&true => true

//expression && expressions &&... => all expressions are is the true then => true or else false
//expression || expressions ||... => if atleast one expressions are is true then => true or else false

let age = 18;
console.log(age >= 18 ? "Can Vote" : "Cannot Vote")
// we  write this way above one in react 

/** we write this condition in above given way in react ..the below is written in js only 
 * if(){
 * .....}
 * else(){
 * .....}
 */

//nullish colleashin(v.imp )
let userObj = {
    age: null, //undefined,
};
//let userAge = userObj.age !== null ? userObj.age : "N/A";
let userAge = userObj.age ?? "N/A";

// Template literal
// `${jsRender}`
//  let emailTemplate = "Dear Anzila "
//  emailTemplate += "you have some notifications"
// the above code can written in 
let emailTemplate = `Dear Anzila
you have some notifications.`
console.log(emailTemplate)

//Destructure (mostly used)
//use array or object while writing array 
let fullName = ["Anzila", "Adhikari"]
// let firstName = fullName[0]
// let lastName = fullName[1]
// we dont need to write two above comment line instead we use destructure

let [firstName, lastName] = fullName //[0,1] => firstName,lastName
console.log(firstName, lastName)
console.log(fullName)

// // if we want various different information
// let userProfile = {
//     id: 10,
//     name: "Oribell Adhikari",
//     phoneNumber: "986500000",
//     emailAddress: "adhikari.apana@gmail.com",
//     stack :['Mern',"Php"]
// }
// const { userName , email: emailAddress, position, stack :[xyz]}= userProfile;
// console.log(userName)
// console.log(emailAddress)
// console.log(position)
// console.log(stack) //Mern,Php
// console.log(xyz) //mern
//  here we can rename any variable as email:emailAddress this way
// if we need to assign the value of variable to another name we do stack:[xyz] xyz take the first index [0] value  of stack 
// if we say we have stack value in array and it have first value object and string it takes object the first index stack:[{},'php], the xyz will be {}

//  (...)spread or rest, we use with destructure 

let productInfo = {
    name:"iphone 12",
    price: 120000,
    discount: 10,
    stock :12,
    order :[{customer:"Ram", quantity:"1",total:1200}]
}
console.log(productInfo)

//clonning, shallow copy & deep copy
// let productInfo1 = productInfo  //reference

// partially deep copy of spread operation 
let productInfo1 = {...productInfo};
productInfo1.discount = 20;
productInfo1.order[0].customer ="shyam"
console.log(productInfo);
console.log(productInfo1);



// const userInfor = {
//     name:["Anzila" ,"Adhikari"], //mem:1234
//     email:"adhikari.anzila@gmail.com"
// }

// console.log(userInfor)  //{ name: [ 'Anzila', 'Adhikari' ], email: 'adhikari.anzila@gmail.com' }

//shallow copy 
// const userInfor1 = userInfor //userinfor1-> mem:1234
// console.log(userInfor)

//Deep copy using spread
// const userInfor1 = {...userInfor}
// console.log(userInfor) // deep copy if userinfo has only primitive data userinfor1=> mem:2345
 //partial deep
//  userInfor1 -> mem:3456=> {email:"adhikari.anzila@gmail.com" name :mem.2345}
// const userInfor1 = {...userInfor}
// console.log(userInfor) //partial deep copy ->primitive they will be assigned into a new ref

// // complete deep copy 
// const userInfor1 = JSON.parse(JSON.stringify(userInfor))
// userInfor1.name[0] ="user name" //3456.name[0] => "user name"
// console.log(userInfor) //userinfor:1234 => {name :["user name"."Adhikari"]}

//REST Operator
let info = {
    name : "phone",
    price: 12345,
    discount: 10,
    stock:2,
    stores:["oliz","Evo"]
}
const{name,price,...remainingInfo}= info

console.log(info)