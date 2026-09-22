// import with es5
// import es6
// import UserProfile from "./UserProfile.js"

const UserProfile = require("./UserProfile");
// child class/Dervied class
class Student extends UserProfile {
  // name,email,address,phone if we need to get output using child class we need to call super constructor of parent class else throws error
  className;
  rollNo;
  courseName;

  //   constructor overriding
  constructor(name, email, address, phone, className, roll, course) {
    //parent constructor..we should always put super on top and above (this).
    super(name, email, address, phone);
    this.className = className;
    this.rollNo = roll;
    this.courseName = course;
  }
// function/method overriding
  getUserName(){
    return `Your name is : ${super.getUserName()}`;
  }
}

module.exports = Student;
