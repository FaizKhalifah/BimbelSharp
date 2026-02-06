import CourseRepository from "../repositories/courseRepository.js";

class CourseService{
    constructor(){
        this.repository = new CourseRepository();
    }

    async createCourse(courseData){
        try{
            const createCourseResult = await this.repository.createCourse(courseData);
            return createCourseResult;
        }catch(err){
            console.error(err);
        }
    }

    async getAllCourse(){
        try{
            const getAllCoursesResult = await this.repository.getAllCourse();
            return getAllCoursesResult;
        }catch(err){
            console.error(err);
        }
    }

    async getCourseById(id){
        try{
            const getCourseByIdResult = await this.repository.getCourseById(id);
            return getCourseByIdResult;
        }catch(err){
            console.error(err);
        }
    }

    async updateCourse(id,updateData){
        try{
            const updateCourseResult = await this.repository.updateCourse(id,updateData);
            return updateCourseResult;
        }catch(err){
            console.error(err);
        }
    }

    async deleteCourse(id){
        try{
            const deleteCourseResult = await this.repository.deleteCourse(id);
            return deleteCourseResult;
        }catch(err){
            console.error(err);
        }
    }
}

export default CourseService;