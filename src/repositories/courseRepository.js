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

    
    async getAllWithPagination(skip, limit) {
        return this.model
        .find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate("teacher", "name")
        .populate("students", "name")
        .lean();
    }
}

   export default CourseRepository;