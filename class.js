class Student {
    constructor(name,age ){
        this.name =name,
        this.age =age           
    }

    detail1(){
        console.log("the student name is " + this.name  )
    }

    detail2(){
        console.log("the student age is " + this.age)
    }
}

const student1 = new Student("Anu",25)
student1.detail1()
student1.detail2()

const student2 = new Student("sathish",30)
student2.detail1()
student2.detail2()