// Create express app
import express from 'express'

import path from 'path'
import fs from 'fs'
import { connectToMongoDb } from './config/dbconfig.js'
import financialRouter from './router/financialRouter.js'


// initialize an express app 
const app = express()


// defining the port 
const PORT = 3000


// app.get('/', (req, res) => {
//     console.log("Req", req)
//     //send a html home page code as a response
//     res.send("<div><a href='/signup'>Sign Up</a> <a href='/login'>Login</a><hr /><h1 style='color: red'>Node JS Login System</h1></div>")
// })


// for db connection 
connectToMongoDb()



  // User Router | Controller
app.use('/api/users', financialRouter)






// run server 
// start a server
app.listen(PORT, (error)=>{
    error 
    ? console.log("Error", error) 
    : console.log(" server is running at http://localhost:" + PORT)
  })



//Run Server
//COnnect with DB
//Create USer router
//Create USer create endpoint || POST endpoint