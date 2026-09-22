// a = 123; //number
// a = '123' //error
// fullNrma = 123 //error
// let abc = "123" as string
// let abc : string = "123";

// Data types:
// string,number.boolean,null,undefined
// here if you dont assign value in variable it will say is being used before assigned
// let b: string = "123";
// console.log(typeof b);

// let c: number = 123;
// console.log(typeof c);

// let d: boolean = true;
// console.log(typeof d);

// let e: null = null;
// console.log(typeof e);

// let f: undefined;
// console.log(typeof f);

// let g: unknown;
// console.log(typeof g);

// let h = any;
// // console.log(typeof h)

// g = 123;
// g = "123";
// // union
// let j: string | number = ""
// j = 123
// j = "123"
// // j = false


// // Array, Object
// // tuple
// let userName: [string,string,number] = ["Anzila","Adhikari",89]
// console.log(userName)

// let i: string[] = [] //i can only have string data in the array

// let k: Array<string |number |boolean| null> = ["",123,null,true];
// let l: (string |number |boolean| null)[] = ["",123,null,true];


// literals
// let gender:"male"|"female"|"other"; //male,female,others
// gender = "male"

// var Role;
// (function(Role) {
//     Role["ADMIN"] = "admin";
//     Role["User"] = "user";
// })(Role ||......)
// type<object or array?
// type UserType ={
//     name:string;
//     email:string;
//     id:number;
//     // role:"admin"|"user";
//     role:Role;
//     address : string;
//     phone? : number|string //optional not needed during creation
    
// };
// interface IuserInfo  {
//     name:string,
//     email:string,
//     id:number,
//     role:Role,
//     address : string,
//     phone? : number|string //optional not needed during creation
// }
// // const userInfo:UserType ={
// const userInfo:IuserInfo = {
//     name:"",
//     email:"",
//     id:123,
//     role:Role.ADMIN,
//     address : "",
// }
// // optional property
// userInfo.phone = 9887346456437

// // interface
// // const func = (a:number, b :number)=>{
// // function func = (a:number, b :number)=>{
// // async function func(a:number,b:number):Promise<number>{
// const func = async(a:number,b:number):Promise<number> => {
//     const c : number = a+b
//     return c;
// }
// const result: Promise<number> = func(10,20)
// readonly
// const props: Readonly<key:string> = {}
// const props: Readonly<key:string> = {key:""};

// interface GenericObj{
    // key: string,
    // [string]: string
// }

// type ObjProps = string | number | Record<string,string>
// const obj: Record<string, ObjProps> = {
//     key:"value",
//     key1:"123",
//     key2:{
//         key3:""
//     }
// }

// Generic<T>
// function addNumber<T>(a:T, b:T){
//     const c = a + b;
//     return c
// }

// addNumber<number>(10,20)
// addNumber<string>("a","b")

function mergeObj<T extends object, U extends object>(first: T, second: U){
    return {...first,...second}
}
const results = mergeObj({name:"anzila"},{email:"anzila@gmail.com"})
console.log(results) 

// using oop
class UserProfile {
    public name: string = '';
    protected email: string = '';
    private phone: string = '';

    constructor(name: string, email: string,phone: string){
        // 
        this.name = name
        this.email = email
        this.phone = phone
    }
    private async privateFunc(param: string|number = ''): Promise<void>{

    }
}
const obj1 = new UserProfile("Anzila","anzila@gmail.com","98067565565")
// obj.privateFunc()
console.log(obj1)