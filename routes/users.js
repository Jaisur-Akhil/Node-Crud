import express from 'express';
import {getUser,createUser,getUserId,delUser,updateUser} from '../controller/control.js'
const router = express.Router()

let users = []

router.get('/users',getUser
    // console.log(users)

)

router.post('/users',createUser)

router.get('/users/:id',getUserId) 

router.delete('/users/:id',delUser)

router.patch('/users/:id',updateUser)

export default router;