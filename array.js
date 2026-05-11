/*let num1=[10,20,30,40]
console.log(num1)

let num2=Array(50,60,70,80)
console.log(num2)   

let num3= new Array(20,40,60,80 )
console.log(num3)

let num4= new Array(5)
console.log(num4)  
/*num4[0]=2
num4[1]=4
num4[2]=6
num4[3]=8
num4[4]=10
console.log(num4) 

num4.push(12)
num4.push(0)
console.log(num4)

let city = ["chennai","bangalore","mumbai","delhi"]
console.log(city)

city.push("kolkata")
console.log(city)   */

//Filter function

let num =[10,20,30,40,50,60,70,80]
let filtered = num.filter(n => n>30)
console.log(filtered)

let numberArr =[58, 23, 45, 12, 67, 34]

numberArr.sort((a, b) => a - b)
console.log(numberArr)  

let numberArr2 =[58, 23, 45, 12, 67, 34]
numberArr2.sort((a, b) => b-a)
console .log(numberArr2)

let city = ["chennai","bangalore","mumbai","delhi"]
city.sort()
console.log(city)
city.sort().reverse()
console.log(city)   

let str = ["apple","banana","grape","orange","amino"]
str.sort()
console.log(str)    