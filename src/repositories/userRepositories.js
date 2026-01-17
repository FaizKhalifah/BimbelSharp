import User from "../models/User.js";

async function createUser(data) {
    const user = new User(data);
    return await user.save();
}

async function getAllUsers(){
    const users = await User.find();
    return users;
}

async function getUserById(id){
    const user = await User.findById(id);
    return user;
}

async function updateUser(id,data) {
    return await User.findByIdAndUpdate(id,data,{new:true});
}

async function deleteUser(id) {
    return await User.findByIdAndDelete(id);
}

export default{
    createUser,getAllUsers,getUserById,updateUser,deleteUser
}