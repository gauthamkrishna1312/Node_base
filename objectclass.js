//Base class
class Base {
    //constructor 
    constructor(number1=100,number2){
        this.num1 = number1;
        this.num2 = number2;
    }
    //functions
    print(){
        console.log("Sum = " + (this.num1+this.num2));
    }
}

//creating new instance of Base
let numbers = new Base(20,30)
let numberOneOnly = new Base(undefined,30)

//calling constructor functions
numbers.print()
numberOneOnly.print()