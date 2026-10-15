class Names {
    getName() {
        return this.firstName + this.lastName
    }

    getAge() {
        return this.age;
    }

    getStack() {
        return this.stack;
    }
}

const obj = new Names();
const some = {
    firstName: 'mani',
    lastName: 'sasi',
    age: 20
}
const contextedObj = obj.bind(some);
const contextObj2 = obj.bind({timeStamp: new Date()})
// obj.getName.call(some); 
// obj.getAge.call(some);
// obj.getStack.call(some);
// obj.getName.call(some);

contextedObj.getAge();
contextedObj.getName();

{
    path: '/getName',
    controller: contextObj2.getName.bind({timeStamp: new Date()})
}

getName(request, response) {

}