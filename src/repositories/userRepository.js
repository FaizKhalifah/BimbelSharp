import User from "../models/User.js";
import BaseRepository from "./BaseRepository.js";

class UserRepository extends BaseRepository{

    constructor(){
        super(User);
    }

    async findByName(name) {
        return User.findOne({ name });
    }

}


export default{
    UserRepository
}