class Person {
   age = 25;

   get location(){

    //getter method
    return "India"

   }

   constructor (firstName , lastName){

    this.firstName = firstName;
    this.lastName = lastName;
   }    

   fullName() {
     console.log(this.firstName + " " + this.lastName)
   }    

}

let person1 = new Person()

//class property calling
console.log(person1.age)
//getter method calling 
console.log(person1.location)

person1 = new Person("Sathish", "Kumar")
//method calling
person1.fullName()

person2 = new Person("Rinu", "Sathish")
person2.fullName()


