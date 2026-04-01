import Teacher from "../models/Teacher.js";
import BaseRepository from "./BaseRepository.js";

class TeacherRepository extends BaseRepository{
    constructor(){
        super(Teacher);
    }

    async findByEmail(email){
        return Teacher.findOne({email});
    }
}

export default TeacherRepository;