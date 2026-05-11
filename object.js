const student = {
    //object inside object
    name:"sathish",
    rollno:25,
    
    //Object method
    detail:function message (){
        console.log("this is a student detils")
   }
}
student.detail()
console.log(student.name + " " + student.rollno)

const employee = {
    name:"sathish",
    id:123,
    empDetail:function(){
        console.log( " the employee name is " + this.name + " and the employee id is " + this.id)
    }
}
employee.empDetail()


//AFTER ES6 :short hand method
const employee2 = {
    name:"sathish",
    details(){
        console.log( " the employee name is " + this.name)
    }
}   
employee2.details()