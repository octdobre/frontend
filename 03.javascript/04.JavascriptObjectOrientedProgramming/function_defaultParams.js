function addNumbers(number1, number2){
    console.log(number1 + number2);
}

addNumbers();  //prints NaN
addNumbers(3,4);

function addNumbersWithDefault(number1 = 1, number2 = 2){
    console.log(number1 + number2);
}

addNumbersWithDefault();
addNumbersWithDefault(3,4);


class User {
    constructor(name = "John", lastName = "Doe"){
        this.name = name;
        this.lastName = lastName;
    }

    printName(){
        console.log(this.name, this.lastName);
    }
}

let undefinedUser = new User();
let markBlade = new User("Mark","Blade");

undefinedUser.printName();
markBlade.printName();