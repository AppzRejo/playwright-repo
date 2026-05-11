// literals method

let employee ={

    firstname:"Rinu",
    lastname:"Sathish",
    age:25,
    fullname:function(){
        return ( this.firstname + " " + this.lastname)
    }   
}
console.log("First Name: " + employee.firstname)
console.log("Last Name: " + employee.lastname)
console.log("Age: " + employee.age)
console.log("Full Name: " + employee.fullname())

//Object calling using bracket notation

console.log("LastName :",employee["lastname"])

//Adding new property to object
employee.gender = "female"
console.log("Gender: " + employee["gender"])

//Removing property from object
delete employee.gender
console.log("Gender: " + employee["gender"])


//Loop throgh all properties of object using for in loop
for (let key in employee){

    if (typeof employee[key] === "function"){

        console.log(key+ " : " ,employee[key]())
    }
    else{
        console.log(key + " : " + employee[key])
        }
}
