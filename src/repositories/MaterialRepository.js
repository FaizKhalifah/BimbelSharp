import Material from "../models/Material.js";
import BaseRepository from "./BaseRepository.js";

class MaterialRepository extends BaseRepository{
    constructor(){
        super(Material);
    }

    async getAllWithPagination(skip, limit) {
        return this.model
        .find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean();
    }

    async findByCourse(courseId,skip,limit){
        return this.model
            .find({ course: courseId })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .lean();
    }
    
    async findWithCourse(id){
        return this.model
            .findById(id)
            .populate("course","name code");
    }   
}

export default MaterialRepository;