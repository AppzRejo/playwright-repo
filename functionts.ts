function great():void{
    console.log("Hello world")
}
great()


function add(a:number,b:number):void{
    console.log(a+b)
}
add(5,3)

function subtraction(x:number,y:number):number{
    return x-y
}
   console.log( subtraction(8,3))


   //to thow exception

   function error(message:string):never   
   {
    throw new Error(message)
   }
error("Something went wrong")