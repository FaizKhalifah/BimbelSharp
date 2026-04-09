import CourseRepository from "../repositories/courseRepository.js";
import TeacherRepository from "../repositories/TeacherRepository.js";
import utils from "../utils/index.js";
import appErrors from "../utils/app-errors.js";

const {formateData} = utils;
const {ConflictError, BadRequestError, InternalError} = appErrors;

class CourseService{
    constructor(){
        this.courseRepository = new CourseRepository();
        this.teacherRepository = new TeacherRepository();
    }

    async createCourse(courseData){
        const isAvailable = await this.courseRepository.findById(courseData.code);
        if(isAvailable){
            throw new ConflictError("Course already exist");
        }
        const isTeacherAvailable = await this.teacherRepository.findById(courseData.teacherId);
        if(!isTeacherAvailable){
            throw new BadRequestError("Teacher not found");
        }
        const createCourseResult = await this.courseRepository.create(courseData);
        return formateData(createCourseResult);
        
    }

    async getAllCourse(){
        const courses = await this.courseRepository.findAll();
        return formateData(courses);
    }

    async getCourseById(id){
        const course = await this.courseRepository.findById(id);
        if(!course){
            throw new BadRequestError("Course not found");
        }
        return formateData(course);
    }

    async updateCourse(id,updateData){
        const isAvailable = await this.courseRepository.findById(id);
        if(!isAvailable){
             throw new BadRequestError("Course not found");
        }
        const updateResult = await this.courseRepository.update(id,updateData);
        return formateData(updateResult);
    }

    async deleteCourse(id){
       const isAvailable = await this.courseRepository.findById(id);
        if(!isAvailable){
             throw new BadRequestError("Course not found");
        }
        const deleteResult = await this.courseRepository.delete(id);
        return formateData(deleteResult);
    }
}

export default new CourseService();