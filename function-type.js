/** Recursive Function
 * Ds: Tree structure Data access
 * const tree = {
 * {leaf:"value",leaf1:"value",leaf2:"value",}{
 *      {leaf:"value",leaf1:"value",leaf2:"value",}{
 *          {leaf:"value",leaf1:"value",leaf2:"value",}
 *        }
 *      }
 *  }
 * check(db table -> value generate check unique)
 * slug => exists => upgrade
 */

//1 to 10 
let i =1;
// const printNumbers =() =>{
//     console.log(i)
//     i++
//     if(i<=10){
//         printNumbers()
//     }
// }

// printNumbers()

//recursive function itself handles it ..also called self calling function,it is also can be called infinite loop
// we use this logic when we need to repeat same sturcture such as document, ui,cv builder,report biniding
// const printNumbers =() =>{
//     console.log(i)
//     i++
//     if(i<=n){
//         printNumbers()
//     }
// }
//  let n =20
// printNumbers()

/**
 * clouser function common function and used
 */
// const func =() => {
//     const func2 =() => {
// //    clouser function
// }
// }


// const fun1 = () => {
//     let x = 10;
//     // scope of fun2 is within fun1 only 
//     // const fun2 = (params) => {
//         return (params) =>{
//     // clouser
//     console.log(params,x)
//     }
//     // fun2("Return of fun1")
//     return fun2
// }
// const result = fun1()
// result("Data")
//logic imp
    //validate data 
    // db query
    // response build
    // client send


// the most used function in JS is =CALLBACK FUNCTION
// when we send one function  as argument of another function 
// const fun1 = (cb) =>{
//     console.log("Function 1")
//     cb()
// }
// const fun3 = (cb) =>{
//     console.log("function 2 ecec")
// }
// const fun2 = () =>{
//     console.log("function 2")
// }

// fun1(fun2)
//  async nature
// time delay,logical delay, promise
// timer event, complete alog(program),db query(operation),api caller

const formatInput =(str,cb) =>{
    const strClean = str.trim().toLowerCase()
    return cb(strClean)
}
const capitalize =(str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const username = " SANDESH "; //"sandesh"
console.log(formatInput(username,capitalize)); //sandesh

//Data Loop
//  .map*, .forEach, .filter