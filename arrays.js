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

console.log({forEachReturn, forMapReturn, arr})

const arr2 = [{
    firstName: 'mani',
    lastName: 'sasikumar',
    age: 26,
}, {
    firstName: 'mani2',
    lastName: 'sasikumar2',
    age: 29,
}, {
    firstName: 'mani3',
    lastName: 'sasikumar3',
    age: 32,
}]

// filter, find, findIndex, reduce