/**
 * future execution
 * 3 stages
 * a.pending(operation)
 * b. REsolution( resolve/success and reject/exception)
 * c.settlement
 */

async function delay() {
//     // default retun type promise
//     // timer related,db operation ,api call function, promise handle
    
}

const delay2 = async()=>{
    // default return type Promise
};
const delay3 = ()=>{
    return new Promise();
}
//  we use async for timeout,db MediaQueryList,file I/O ,API CAller ,Long and complex function expressions




// const login = async () =>{
//     // 2states one success and another failure
//     return { username: "anzila", email:"anzila@gmail.com"}
// }
// login()
// .then((data)=>{
//     console.log(data);
//     // we write code here after login execution
//     // console.log(data.msg)
// })
// .catch((exception)=>{
//     console.log(exception)
//     // after login failed execution
// })

//await

// const login = async () =>{
//     // 2states one success and another failure
//     // logic//validation pending
//         // db query
//         // success 
//     // return { username: "anzila", email:"anzila@gmail.com"}
//     throw {message:"Login FAiled",code:404}
//     //throw new error("login Failed") 

//     // fail/error
// };
// we dont use then catch way of handling in modern js
// IIFE(Immedieatly invokable function structure)
// (async()=>{
//     try{
//         const result = await login() //resolve i.e. return from async function
//     }catch(exception){
//         console.log(exception) //reject i.e. throw from async function
//     }
// })() //function call without function name given

// const handler =async =>{
    // await keyword can only be accessed inside async function
    // const result = await login() //resolve state handling 
// }
// handler()


const login = () =>{
    return new Promise((resolve,reject)=>{
    //  success
    resolve ({ username: "anzila", email:"anzila@gmail.com"})
    // reject({message:"Login FAiled"})
    // reject (new Error("Login Failed"))
}) 
}
// IIFE(Immedieatly invokable function structure)
(async()=>{
    try{
        const result = await login() //resolve i.e. return from async function
        console.log(result)
    }catch(exception){
        console.log(exception) //reject i.e. throw from async function
    }finally{
        console.log("Always execute at last") //last stage called settlement
    }
})() //function call without function name given


