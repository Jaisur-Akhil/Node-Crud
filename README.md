# Node-Crud
Description : 

I have used express, uuid for giving random id , bodyparser for json , nodemon & Postman for post, delete ,getid, patch . 
CRUD operations are taking place in an array so no need to worry about database . 
begin with json and keep playing it all with CRUD operations .
i have placed routes in other routes folder & logic in controller folder to maintain neatness . 

Starter

nmp install 

install postman 

get req - http://localhost:5000/users

post req - http://localhost:5000/users

body > raw > json 

{
    "fName":"Akhil",
    "lName":"jaisur",
    "age":"22"
}

del req - http://localhost:5000/users/:id

example
http://localhost:5000/users/ce80f568-c4ce-4f0c-898c-

patch req - http://localhost:5000/users/:id

example
http://localhost:5000/users/01e673b0-cc6e-42e4-b2f5-3d086eeb4aa7
{
    "lName":"Jaisur",
    "age":23
}
