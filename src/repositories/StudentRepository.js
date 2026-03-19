import Student from "../models/Student.js";
import BaseRepository from "./BaseRepository.js";

class StudentRepository extends BaseRepository{
   constructor(){
        super(Student);
   }
}

export default {
    StudentRepository
};