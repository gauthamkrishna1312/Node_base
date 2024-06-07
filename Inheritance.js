//Base class for the default implementation
class Base {
    constructor(){
        this.name = "Gautham";
    }
    print(){
        console.log("Name : " + this.name);
    }
}

//Inherits from Base class
class Derived extends Base {
    constructor(){
        //super constructor for derived classes that override this constructor
        super();
        this.age = 24;
        console.log("Age = " + this.age);
    }
}

//object OF 'Derived' class
let obj = new Derived();
obj.print();