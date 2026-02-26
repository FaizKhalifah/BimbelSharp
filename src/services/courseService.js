import CourseRepository from "../repositories/courseRepository.js";
import {formateData} from "../utils/index.js";
import {APIError} from "../utils/app-errors.js";

class CourseService{
    constructor(){
        this.repository = new CourseRepository();
    }

    async createCourse(courseData){
        try{
            const createCourseResult = await this.repository.createCourse(courseData);
            return formateData(createCourseResult);
        }catch(err){
            throw new APIError("data not found");
        }
    }

    async getAllCourse(){
        try{
            const getAllCoursesResult = await this.repository.getAllCourse();
            return formateData(getAllCoursesResult);
        }catch(err){
            throw new APIError("data not found");
        }
    }

    async getCourseById(id){
        try{
            const getCourseByIdResult = await this.repository.getCourseById(id);
            return formateData(getCourseByIdResult);
        }catch(err){
            throw new APIError("data not found");
        }
    }

    async updateCourse(id,updateData){
        try{
            const updateCourseResult = await this.repository.updateCourse(id,updateData);
            return formateData(updateCourseResult);
        }catch(err){
            throw new APIError("data not found");
        }
    }

    async deleteCourse(id){
        try{
            const deleteCourseResult = await this.repository.deleteCourse(id);
            return formateData(deleteCourseResult);
        }catch(err){
            throw new APIError("data not found");
        }
    }
}

export default CourseService;