// // var a=undefined;
// // let b;
// // const c;
// console.log(sum(10,30))
// console.log(a);
// console.log(b);
// console.log(c);
// var a =30;
// let b = 20;
// const c= "mani";

// function sum(a,b) {
// let i = 0;
// for (i; i<10; i++) {
//     console.log(i);
// }

// // console.log(i); -> 10
// }

// const i = 100;
// i++;

// i += 102;
// // hoisting


// // var -> hoisted with undefined value
// // fun -> fully hoisted

// // let, const -> hoisted but in temporary dead zone -> cant access until its initialize




// let a = 10.10;
// let b = `mani`;
// let c = false;
// let d = [];
// let e = {};
// let f = null / undefined;
// let h = undefined;
// let i;

// let g = Symbol(18);
// let j = Symbol(18);
// g == j -> false
const key = "orgnization";

const obj = {
    firstName: 'mani',
    lastName: 'sasi',
    phn: 323213,
    isAppiled: true,
    // "first name": 'test',
    org: "Concentrix",
    "10": '1234',
    family: {
        familName: 'sasi',
        familyFrom: '',
        familofFamily1: {
            name: 'some'
        }
    }
} 

obj = {}; // error const cant be reinitilized
changeName(obj) -> pass by refernce
function changeName(nameObj) {
    nameObj.firstName = "manikandan"
    // obj.firstName = "manik"
}
obj.firstName ->manikandan
// obj.first name
// obj.family?.familofFamily

// chaining
// string -> keys

// const  

// true ? 'name' : 'someothername'

// class Test {
//     test = "mani";
// }

// let a = new Test();
// a.test