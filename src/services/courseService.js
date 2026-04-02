import CourseRepository from "../repositories/courseRepository.js";
import utils from "../utils/index.js";
import appErrors from "../utils/app-errors.js";

const {formateData} = utils;
const {ConflictError, BadRequestError, InternalError} = appErrors;

class CourseService{
    constructor(){
        this.repository = new CourseRepository();
    }

    async createCourse(courseData){
        const isAvailable = await this.repository.findById(courseData.code);
        if(isAvailable){
            throw new ConflictError("Course already exist");
        }
        const createCourseResult = await this.repository.create(courseData);
        return formateData(createCourseResult);
        
    }

    async getAllCourse(){
        const courses = await this.repository.findAll();
        return formateData(courses);
    }

    async getCourseById(id){
        const course = await this.repository.findById(id);
        if(!course){
            throw new BadRequestError("Course not found");
        }
        return formateData(course);
    }

    async updateCourse(id,updateData){
        const isAvailable = await this.repository.findById(id);
        if(!isAvailable){
             throw new BadRequestError("Course not found");
        }
        const updateResult = await this.repository.update(id,updateData);
        return formateData(updateResult);
    }

    async deleteCourse(id){
       const isAvailable = await this.repository.findById(id);
        if(!isAvailable){
             throw new BadRequestError("Course not found");
        }
        const deleteResult = await this.repository.delete(id);
        return formateData(deleteResult);
    }
}

export default CourseService;