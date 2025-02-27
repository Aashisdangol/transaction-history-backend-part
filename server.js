// Create express app
import express from 'express'

import path from 'path'
import fs from 'fs'

// initialize an express app 
const app = express()

// defining the port 
const PORT = 300

app.get('/', (req, res) => {
    console.log("Req", req)
    //send a html home page code as a response
    res.send("<div><a href='/signup'>Sign Up</a> <a href='/login'>Login</a><hr /><h1 style='color: red'>Node JS Login System</h1></div>")
})



//Run Server
//COnnect with DB
//Create USer route
//Create USer create endpoint || POST endpoint