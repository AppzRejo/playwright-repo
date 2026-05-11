class TypescriptclassSample{//class declaration
 name:string
 constructor(name:string){
    this.name=name
 } 

  greet():string{
  return "hello"+this.name
 } 

}

const obj=new  TypescriptclassSample("Anu")
const result =obj.greet()
console.log(result)