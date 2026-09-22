// Parent class
// here we are using es5 we will use es6 in typescript
class UserProfile {
  #name;
  email;
  address;
  phone;

  constructor(name, email, address, phone) {
    this.name = this.#name;
    this.email = email;
    this.address = address;
    this.phone = phone;
  }
  // function to access private data using child class... with same function name.
  getUserName(){
    return this.#name;
  }
}
module.exports = UserProfile; //ES5
