import Student from "../models/Student.js";
import BaseRepository from "./BaseRepository.js";

class StudentRepository extends BaseRepository{
   constructor(){
        super(Student);
   }

   async findByEmail(email){
        return Student.findOne({email});
   }
}

export default StudentRepository;