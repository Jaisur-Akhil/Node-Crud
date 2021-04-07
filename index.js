import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express()
app.use(bodyParser.json())
app.use('/', usersRoutes)


const PORT = 5000;
app.listen(PORT,()=>{
    console.log('Server running ')
})