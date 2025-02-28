// import userModel from "../schema/userSchema.js";

// create 
export const createUser = (userObject) =>{
    return userModel(userObject).save()
}