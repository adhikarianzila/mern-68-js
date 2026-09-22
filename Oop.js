// syntax
// class User {
//     // data or methods
// }

// // object instantiation
// const userObj = new User ()

// console.log(typeof userObj) //object
// console.log(userObj) //User{}

// class User {
//   name = "Anzila Adhikari"; //default initialized
//   email;
//   address;
//   phone;
//   role;

//   //    function setEMail() {}
//   setEmail(_email) {
//     // self pointer -> this
//     this.email = _email
//   }
//   //  if you want the data in array
//   getEmail = () => {
//     return this.email
//   };
// }
//  if we write es 5 we dont need to write .js but if write es 6 we need to write.js 
// we cant mix es5 or es6 need to choose any one though new update has let to mix

const User = require("./class/User")
// import User from "./class/User.js"



// userObj.setEmail("anzila@gmail.com");
// console.log(typeof userObj); //object
const userObj = new User("Anzila","anzila@gmail.com","Chitwan"); //constructor
console.log(userObj); //User{name:"Anzila Adhikari", email:"anzila@gmail.com",....}
console.log(userObj.getEmail());
// we write this above code in class folder inside user.js

// 