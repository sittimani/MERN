function sum(a,b,c) {
    console.log(a,b,c)
    console.log(a+b+c);
}

const sumofNum = (a,b,c) => a + b + c

// const sumofNum = (a,b,c) => { return a + b + c}

// sum(10,20,30,40)
const sum1 = sumofNum(20,40,60)
// console.log({sum1})

function divide(num, divider = 1, isSayHi = false) {

    if (isSayHi) {
        console.log('HIII')
    }
    // console.log(num/divider)
}

divide(10, undefined)

// processData(data, key, true)

const arr = [1,2,3];

// sum(arr)


function mainFn() {
    console.log('mainFn');
    subFn();
    function subFn() {
        console.log('subFn')
    }
}
// mainFn()

// let someHolder = undefined

function sumNums() {
    let sum = 0;
    // someHolder = 10;
    return (a) => {
        sum +=a;
        return sum;
    }
    // someHolder(1002)
    // return sum3;
}



// sumNums();
// someHolder(10)
// // higher order function -> a function returns another function
const sumFn = sumNums();
// const sumFn = 20
console.log(sumFn(10)); // new TestClass2()
console.log(sumFn(20));
console.log(sumFn(30));


// const meth = (data) => {
//     return data *2;
// }
// arr2 = [1,2,3]
// arr2.map(meth)