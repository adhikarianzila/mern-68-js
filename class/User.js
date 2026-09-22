class User {
  name = "Anzila Adhikari"; //default initialized

  // private email
  // private - if you dont want to let user to access email or any data
  #email;
  address;
  phone;
  role;
  //constructor
  constructor(name, email, address) {
    // should never be an arrow function
    //  never return promise or make async
    // return nre Promise()
    // usually we do not return

    this.name = name;
    this.email = email;
    this.address = address;
    console.log("I am constructor");
  }

  //    function setEMail() {}
  setEmail(_email) {
    // self pointer -> this
    this.#email = _email;
  }
  //  if you want the data in array
  getEmail = () => {
    return this.#email;
  };
}

// if we need same data from user to student we inherit
// child class
class Student extends User {
  className;
  sectionName;
  rollNo;
  course;
}

module.exports = User;
// export default User
