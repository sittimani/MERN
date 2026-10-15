this.temp = "Priya";

const user = {
    temp: '123',
    greetwithnormalfn: function() {
        console.log('normal function', this.temp)
    },
    greet: () => {
        const tempFn = () => {
            console.log(this.temp, 'inside arrow');
        }
        console.log(this.temp);
        tempFn()
    }
};

const s = user.greet.bind(user); // Priya
// s()
const temp2 = user.greetwithnormalfn.bind({temp: 'mani'})
// temp2();

const some = () => {
    console.log(this.temp)
}

some()