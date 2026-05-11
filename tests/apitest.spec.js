import {test,expect, request} from '@playwright/test'
test('Get request-fetch users' , async({request})=>{
const response= await request.get('https://jsonplaceholder.typicode.com/users')
expect(response.ok()).toBeTruthy()//to verify the response pk to be true
const body=await response.json() //to convert the response body to json
console.log(body)
expect(body.length).toBeGreaterThan(0) //length of response body >0
}
)

//POST

test('Post Request' , async({request})=>{

    const respons=await request.post("https://jsonplaceholder.typicode.com/users",{
    data:{
        name:"ann",
        email:"abc@g,mail.com"
    }})
    expect(respons.status()).toBe(201)
    const responseBody = await respons.json()
    console.log(responseBody)
    expect(responseBody.name).toBe("ann")

})

//PATCH

test.only('Patch request - update request', async({request})=>{
const respons=await request.patch("https://jsonplaceholder.typicode.com/users/11",{
     data:{
        
        email:"abcdef@g,mail.com"
    }})

    expect(respons.status()).toBe(200)
    const responseBody = await respons.json()
    console.log(responseBody)
    expect(responseBody.email).toBe("abcdef@g,mail.com")
})

//PUT

test('Put  request - entire user update', async({request})=>{
    const respons=await request.put("https://jsonplaceholder.typicode.com/users/10",{
     data:{
  "id":11,
  "name": "Clementina DuBuques",
  "username": "Moriah.Stanton",
  "email": "Rey.Padberg@karina.bizd",
  "address": {
    "street": "Kattie Turnpike",
    "suite": "Suite 198",
    "city": "Leebsackbury",
    "zipcode": "31428-2261",
    "geo": {
      "lat": "-38.2386",
      "lng": "57.2232"
    }
  },
  "phone": "024-648-3800",
  "website": "ambrose.net",
  "company": {
    "name": "Hoeger LLC/co",
    "catchPhrase": "Centralized empowering task-force",
    "bs": "target end-to-end models"
  }
}
})

    expect(respons.status()).toBe(200)
    const responseBody = await respons.json()
    console.log(responseBody)
})


//Delete

test('DeleteRequest', async({request})=>{
    const response= await request.delete('https://jsonplaceholder.typicode.com/users/10')
expect(response.ok()).toBeTruthy()

})