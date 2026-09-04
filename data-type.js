/**
 * *Primitive Data Tyoe (Immutable data types)
 * a.string(Text)
 * "",'',`` 
 * b.Number(integer,float,bigInt)
 * *123,1.23,1e23,NaN,Infinity
 * c.Boolean
 * *true,false
 * d.Null
 * *null
 * e.Undefined(default)
 * *undefined
 * f.symbol
 * 
 * Derived(Mutable data types) / json is read by any programming laanguage
 * a.Array 
 * [] or using new Array()
 * b.object
 * {} or instance of any class
 * c.Function
 * func
 * d.set
 * 
 */

let a = "";
let b = "";
let c = ``;

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

let x = 10;
let y;
let z = x + y;
console.log(z)


// Array
let userProfile = ["Anzila Adhikari", "9865245957", "adhikari.anzila@gmail.com"]
let userProfileArray = new Array("Anzilaa Adhikari", "9865245957", "adhikari.anzila@gmail1.com");
console.log(userProfile[0])
console.log(userProfileArray[0])
//  in array we use squarebracket and in object we use curly bracket
//object
//here we need key and value
let user = {
    name: "Anzila Adhikari",
    phoneNumber: "9865245957",
    emailAddress: "adhikari.anzila@gmail.com"
}
console.log(user)
console.log(user.name)

let users = [
    {
        id: 1,
        name: "Anzila Adhikari",
        phoneNumber: "9865245957",
        emailAddress: "adhikari.anzila@gmail.com"
    },
    {
        id: 2,
        name: "Apana Adhikari",
        phoneNumber: "986500000",
        emailAddress: "adhikari.apana@gmail.com"
    }
]
console.log(users)
console.log(users[0])
console.log(users[0].name)

    //task 2
    //Create a js array with at least 10 different user profile with name,email,
    //address,phone CSSStyleProperties.Print each information in the followig format
//     ```txt
// ***
// Name Here 
// Email
// address
// phoneNumber
// ***
// ```


let newUsers = [
    {
        id: 1,
        name: "Anzila Adhikari",
        phoneNumber: "9865245957",
        emailAddress: "adhikari.anzila@gmail.com"
    },
    {
        id: 2,
        name: "Apana Adhikari",
        phoneNumber: "986500000",
        emailAddress: "adhikari.apana@gmail.com"
    },
    {
        id: 3,
        name: "Sita Adhikari",
        phoneNumber: "9865245957",
        emailAddress: "adhikari.anzila@gmail.com"
    },
    {
        id: 4,
        name: "Rabin Adhikari",
        phoneNumber: "986500000",
        emailAddress: "adhikari.apana@gmail.com"
    },
    {
        id: 5,
        name: "Aaron Adhikari",
        phoneNumber: "9865245957",
        emailAddress: "adhikari.anzila@gmail.com"
    },
    {
        id: 6,
        name: "Diwas Karki",
        phoneNumber: "986500000",
        emailAddress: "adhikari.apana@gmail.com"
    },
    {
        id: 7,
        name: "Rabina Baral",
        phoneNumber: "9865245957",
        emailAddress: "adhikari.anzila@gmail.com"
    },
    {
        id: 8,
        name: "Asmita Wosti",
        phoneNumber: "986500000",
        emailAddress: "adhikari.apana@gmail.com"
    },
    {
        id: 9,
        name: "Anzila Koirala",
        phoneNumber: "9865245957",
        emailAddress: "adhikari.anzila@gmail.com"
    },
    {
        id: 10,
        name: "Oribell Adhikari",
        phoneNumber: "986500000",
        emailAddress: "adhikari.apana@gmail.com"
    }
];
console.log(newUsers)

