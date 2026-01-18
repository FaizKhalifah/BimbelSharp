import User from "../models/User.js";

class UserRepository{

    async createUser(data) {
        const user = new User(data);
        return await user.save();
    }

    async getAllUsers(){
        const users = await User.find();
        return users;
    }

    async getUserById(id){
        const user = await User.findById(id);
        return user;
    }

    async updateUser(id,data) {
        return await User.findByIdAndUpdate(id,data,{new:true});
    }

    async deleteUser(id) {
        return await User.findByIdAndDelete(id);
    }

}


export default{
    UserRepository
}