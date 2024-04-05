class Person implements PersonInterface{
    //...implement the methods here.
    name : String;
    age : number;


    constructor(name:String,age:number){
        this.name = name;
        this.age = age;
    }

    greet() {
        return "HI Mr "+this.name+", How are you? "
        + "I am glad , You today become "+this.age+" years old.";
    }

}

interface PersonInterface{
    name : String;
    age : number;
    greet() : String;

}

const personObject = new Person("Rahul Ray",26)
console.log(personObject.greet())