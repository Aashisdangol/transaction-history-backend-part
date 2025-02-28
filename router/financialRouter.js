import express, { json } from 'express'
import { createUser } from '../model/userModel.js'
const financialRouter = express.Router()

financialRouter.post('/', (req,res) =>{
    const userObject = req.body

    createUser(userObject)
    .then(user => {
        res.json ({
            status: 'success',
            message : 'user created',
            data : user
        })
    })
    .catch(error =>{
        res.json({
            status: 'error',
            error: error.message || "couldnot create user"
        })
    })


} )


// // CREATE | POST single Task
// taskRouter.post("/", (req, res) => {
//     const taskObject = req.body
  
//     createTask(taskObject)
//       .then(task => {
//         res.json({
//           status: "success",
//           message: "Task created",
//           data: task
//         })
//       })
//       .catch(error => {
//         res.json({
//           status: "error",
//           error: error.message || 'Could not create task'
//         })
//       })
//   })




export default financialRouter