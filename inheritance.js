class Animal{
    constructor(name){
        this.name = name
    }      
    
    sound(){
        console.log(this.name + " makes a sound")
    }
}

class Dog extends Animal{

    constructor(name , breed){
        super(name)  //calling parent class constructor
        this.breed = breed
    } 

    breedType(){
        console.log(this.name + " named " + this.breed + " barks loudly")
    }
}

let dog1 =new Dog("Buddy", "Golden Retriever")
dog1.sound()
dog1.breedType()