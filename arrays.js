// const arr = [1, 'manikandan', { firstName: 'mani' }, false];
// console.log({arr})

// console.log(arr[2])
const arr = [1,2,3,4,5];

// arr[7] = 6;
//[ 1, 2, 3, 4, 5,undefined, undefined, 6 ]
// console.log(arr)

// console.log(arr.pop());
// console.log(arr)
// console.log(arr.shift());
// console.log(arr)
// arr.push(100); // pushed to end of the array
// arr.unshift(99); // pushed to 0th index and move all exisitng elements by one index
// console.log(arr)

// [1, ...arr]


// for(let i =0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

const forEachReturn = arr.forEach((value, index) => {
    // console.log(value, index)
    return value * 2;
})
// console.log('------------------')
const forMapReturn = arr.map((value, index) => {
    // console.log(value, index)
    return value * 2;
})

// console.log({forEachReturn, forMapReturn, arr})

const arr2 = [{
    firstName: 'mani',
    lastName: 'sasikumar',
    age: 26,
    salary: 1000,
    org: 'concentrix'
}, {
    firstName: 'mani2',
    lastName: 'sasikumar2',
    age: 29,
    salary: 2000,
    org: 'aspire'
}, {
    firstName: 'mani3',
    lastName: 'sasikumar3',
    age: 32,
    salary: 3000,
    org: 'deloitte'
}]

// filter, find, findIndex, reduce


const filteredArray = arr2.filter((data, index) => {
    return data.age > 28;
})
// console.log({filteredArray})

const firstMatched = arr2.find((data, index) => {
    return data.age > 28;
})
// console.log({firstMatched})

const firstMatchedIndex = arr2.findIndex((data, index) => {
    return data.age > 48;
})
// console.log({firstMatchedIndex})

const allMatched = arr2.every((data) => {
    return data.age > 28
})

const anyOneMatch = arr2.some((data) => {
    return data.age > 28
})

// console.log({allMatched, anyOneMatch})

const sum = arr2.reduce((previousValue, currentValue, currentIndex) => {
    // console.log({previousValue, currentIndex, currentValue})
    if (currentValue.age > 28)
        previousValue += currentValue.salary;
    return previousValue
}, 0)

// console.log(sum)

// {aspire: [], deloitte: [], concentrix: []}


// {concentrix: [{}]}
const groupEmployee = arr2.reduce((prevVal, currentValue) => {
    const { org } = currentValue;
    if(!prevVal[org]) {
        prevVal[org] = [];
    }
    // if (prevVal[org]) {
        prevVal[org].push(currentValue);
    // } else {
    //     prevVal[org] = [];
    //     prevVal[org].push(currentValue);
    // }
    return prevVal;
}, {})

// console.log(groupEmployee)

// {
//     aspire: {
//         totalEmployee: <count>,
//         totalSalary: <sum of salary>
//     }
//     concentrix: {
//         totalEmployee: <count>,
//         totalSalary: <sum of salary>
//     }
// }