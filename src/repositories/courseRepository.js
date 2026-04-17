import Course from "../models/Course.js";
import BaseRepository from "./BaseRepository.js";

class CourseRepository extends BaseRepository{
    constructor(){
        super(Course);
    }

    async findByCode(code){
        return this.model.findOne({code});
    }

    async findWithRelations(id){
        return this.model.findById(id).populate("teacher").populate("students");
    }
}

   export default CourseRepository;