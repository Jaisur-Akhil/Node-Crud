import {v4 as uuidv4} from 'uuid';
let users = []
export const getUser = (req,res)=>{
    
    res.send(users)}

export const createUser = (req,res)=>{

    let user = req.body
    
    const userWithId = {...user , id: uuidv4()}

    users.push(userWithId);

    res.send(' added to the database ' +userWithId)
    
}   

export const getUserId = (req,res)=>{
    const { id } = req.params
    console.log(req.params)

  const f=  users.find((usersA)=> usersA.id = id);
    res.send(f)
}

export const delUser = (req,res)=>{
    const { id } = req.params
    users = users.filter((user) => user.id != req.params.id)
    res.send(`User with id ${id} deleted `)
}

export const updateUser = (req,res)=>{
    const {id} = req.params

    
    const user = users.find((user) => user.id = id)
    
    const {fName , lName , age} = req.body;

    if(fName){
        user.fName = fName
    }
    if(lName){
        user.lName = lName
    }
    if(age){
        user.age = age
    }
    
    res.send(`User with id ${id} has updated`);
}