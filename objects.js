const obj = {
    firstName: 'mani',
    lastName: 'sasikumar',
    age: 26,
}

// [{//state, isView: false}, {//country}].map()

const keys = Object.keys(obj);
const values = Object.values(obj);
const entries = Object.entries(obj); // [[firstname, mani], []]

for (let i =0; i < keys.length; i++) {
    const key = keys[i];
    // console.log({[key]: obj[key]})
}

for (let i=0; i<entries.length; i++) {
    const [key, value] = entries[i];
    // console.log({[key]: value})
}
// console.log({ keys, values, entries});

const arrayEntries = [
    [ 'firstName', 'mani' ],
    [ 'phn', 709222 ]
  ]

const fromEntriesReturn = Object.fromEntries(arrayEntries);
// console.log({fromEntriesReturn})

// freeze    -> No modification, delation, or insertion   
// seal -> no insertion and delete but still modifcation 
// preventExtension-> no insertion, but we can modifiy and delete

// Object.freeze(obj);
// obj.firstName = 'manikandan';
// console.log(obj)

// Object.seal(obj);
// obj.org = 'concentrix';
// console.log(obj)

// Object.preventExtensions(obj);
// delete obj.phn;
// console.log(obj)

// const target = { org: 'concentrix' };
// Object.assign(target, obj);
// console.log(target)

const obj2 = {
    ...obj,
    lastName: 'sasi',
    firstName: 'manikandan',
}

// obj2.firstName = 'manikandan';
console.log(obj2)