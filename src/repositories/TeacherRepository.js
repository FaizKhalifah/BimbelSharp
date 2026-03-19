import Teacher from "../models/Teacher.js";
import BaseRepository from "./BaseRepository.js";

class TeacherRepository extends BaseRepository{
    constructor(){
        super(Teacher);
    }
}

export default TeacherRepository;