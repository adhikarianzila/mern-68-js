/**
 * solid principle of programming(Imp)
 * a. Single Responsibility Principle
 * b. Open -Close Principle Principle
 * c. Liskov Substitution Principle
 * d. Interface-Seggregation Principle
 * e. Dependency Inversion Principle
 * function
 * -code block that executes and perform some operations
 * -A function can receive/take anything as input(parameters)and can return anything as output(return/throw)
 * 
 * a.compilation(Creation) phase
 * -interpreter all the 
*/


function addTwoNumbers(a,b){
    const c = a+b;
    return c;

}
let result = addTwoNumbers(10,20)
console.log(result) //30

//Arrow(will use this function in modern js)
const addTwoNumber = (a,b) =>{
    const c = a+b;
    return c;

}
const res = addTwoNumber(10,20)
console.log(res); //30

//generic function 
const addTwoNumber1 = function(a,b){
    return a+b;
}

const res1 = addTwoNumber1(10,20)
console.log(res1) //30


// if you use {} then its functional block 
//Temporal Dead Zone(TDZ)
{
    // console.log(b); // error
    var a = 10; // this has tdz 
    let b =20; // here the tdz is temporarily destroyed 
    console.log(b) // here the b is live so we can access the value here
}

// // task 1
// -** develop a js function to convert Temperature unit from celcius to fareheinheit.The formula to convert C to f is : **
// -``` f = (c * 9/5)+32```

function tempFahreinheit(c){
   const f = (c * 9/5)+32;
    return f;
}
let temperature = tempFahreinheit(38)
console.log(temperature)

// arrow
const tempconverter =(c)=>{
    const f = (c * 9/5)+32;
     return f;
}
const tempCelcius = tempconverter(36)
console.log(tempCelcius);

//we can give default value in function function addtwonumber(a,b= 10 )..like this 
const calculateTax =(base,tax=base*0.13)=>{
    return base + tax;
}
console.log(calculateTax(100)) //113
console.log(calculateTax(100,10)) //110


const calculator = (a,b) => {
    console.log(sum) //sum=2
    sum = a+b;
    diff = a-b;
    mul = a*b;
    div = a/b;
    mod = a%b;
}
let sum= 2; //ouput 30 .. the value is override by a+b
let diff;   //ouput -10
let mul;    //ouput 200
let div;    //ouput 0.5
let mod;    //ouput 10

calculator(10,20)
console.log(sum,diff,mul,div,mod)

/**
 * Recursive Functions
 * clouser
 * callback
 * async-await(VVIMp)
 */