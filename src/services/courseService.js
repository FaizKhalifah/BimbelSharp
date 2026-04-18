import CourseRepository from "../repositories/courseRepository.js";
import TeacherRepository from "../repositories/TeacherRepository.js";
import StudentRepository from "../repositories/StudentRepository.js";
import utils from "../utils/index.js";
import appErrors from "../utils/app-errors.js";

const {formateData} = utils;
const {ConflictError, BadRequestError, InternalError} = appErrors;

class CourseService{
    constructor(){
        this.courseRepository = new CourseRepository();
        this.teacherRepository = new TeacherRepository();
        this.studentRepository = new StudentRepository();
    }

    async createCourse(courseData){
        const isAvailable = await this.courseRepository.findByCode(courseData.code);
        if(isAvailable){
            throw new ConflictError("Course already exist");
        }
        const isTeacherAvailable = await this.teacherRepository.findById(courseData.teacher);
        if(!isTeacherAvailable){
            throw new BadRequestError("Teacher not found");
        }
        const createCourseResult = await this.courseRepository.create(courseData);
        return formateData(createCourseResult);
        
    }

    async getAllCourse({page,limit}){
        const skip = (page - 1) * limit;
        const courses = await this.courseRepository.getAllWithPagination(skip,limit)
        return formateData(
            {
                page,limit,data:courses
            }
        );
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

    async assignStudent(courseID,studentID){
        const course = await this.courseRepository.findById(courseID);
        if(!course){
            throw new BadRequestError("Course not found");
        }

        const student= await this.studentRepository.findById(studentID);
        if(!student){
            throw new BadRequestError("student not found");
        }

        const isEnrolled = course.students.include(studentID);
        if(isEnrolled){
            throw new ConflictError("Student already enrolled");
        }

        course.students.push(studentID);
        await course.save();

        return formateData(course);

    }

    async removeStudent(courseID,studentID){
        const course = await this.courseRepository.findById(courseID);
        if(!course){
            throw new BadRequestError("Course not found");
        }

        const student= await this.studentRepository.findById(studentID);
        if(!student){
            throw new BadRequestError("student not found");
        }

        const isEnrolled = course.students.include(studentID);
        if(!isEnrolled){
            throw new BadRequestError("Student not enrolled in this class");
        }

        const studentIndex  = course.students.indexOf(studentID);
        course.students.slice(studentIndex,studentIndex);
        await course.save();
        return formateData(course);


    }

    async getCourseDetail(id) {
        const course = await this.courseRepository.findWithRelations(id);

        if (!course) {
            throw new NotFoundError("Course not found");
        }

        return formateData(course);
    }
}

export default new CourseService();