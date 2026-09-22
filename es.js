// javascript is developed by ecma
// research ecma

// commonjs vs module 
// es5 or es6 - es262
/**
 * ES6 features
 * -let,const
 * -block
 * 
 * Data types 
 * -symbol, set, functions
 * 
 * operators
 * -??, `${}`, ...,(...),destructure
 * 
 * loop
 * for-in, for-of
 * 
 * function
 * -arrow, default value for the parameters,
 * - .map, .filter, .reduce, .forEach(), .some(), .every()
 * - async-await
 * 
 * OOP
 * -class Based OOP
 * 
 * Import and export
 * default export and named export 
 */

// es 5 export and import
const userObj ={}
const functionName = () => {}

// export
GPUShaderModule.exports = {
    userObj,
    functionName
}

// import
// const var = require("./es")
//     var.functionName()
//     userObj

// const {functionName,userObj} = require("./es")
//     var.functionName()
//     userObj


// es 6 export
// named export

// export const (userObj)={};
// export const functionName1 = () =>{};

// other file except es.js
// import defaultExport, {userObj, functionName}
