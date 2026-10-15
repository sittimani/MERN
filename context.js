// this.temp = 20;

// function some() {
//     console.log(this.temp) // normal scope
// }

// const som2 = () => {
//     console.log(this.temp) // lexical scope
// }

// some.call(this)
// som2()

// normal function -> who called me
// arrow function -> where i was written

const temp = {
    firstName: 'Jerlin',
    lastName: 'abc'
}

this.firstName = "Manikandan";
this.lastName = "Sasikumar"

const obj = {
    firstName: 'Mani',
    lastName: 'Sasi',
    getName: function(msg, stack) {
        console.log(this.firstName + " "+ this.lastName + " " + msg + " " + stack);
    },
    getNameWithArrow: () => {
        console.log(this.firstName + " "+ this.lastName);
    }
}

// console.log(obj.getName());
// obj.getName();
// obj.getNameWithArrow();

const tempHolder = obj.getName;
// tempHolder.call(temp, 'Hi there', "Dot Net");
// tempHolder.call(this, 'Hi there', "Dot Net");
// tempHolder.call(this, 'Hi', "Dot Net");
// tempHolder.call(temp, 'Hi there 2', "Dot Net");
// tempHolder.apply(temp, ['Hi there', 'Dot Net']);
const tempHolder2 = tempHolder.bind(temp);
const tempHolder3 = tempHolder.bind(this);
tempHolder2('Hi There', 'Dot Net')
tempHolder3('Hey', "MERN")

// call -> used to call a fn with context with arguments as comma seperated value
// apply -> used to call a fn with context with arguments as a array
// bind -> used to create a new version of the fn with Context. later part we can call with arguments as normal fn
