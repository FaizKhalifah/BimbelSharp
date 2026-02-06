import Course from "../models/Course.js";

class CourseRepository{

    async createCourse(data) {
        const course = new Course(data);
        return await course.save();
    }

    async getAllCourse() {
        const courses = await Course.find();
        return courses;
    }

    async getCourseById(id) {
        const course = await Course.findById(id);
        return course;
    }

    async updateCourse(id, data){
        return await Course.findByIdAndUpdate(id,data,{new:true});
    }

    async deleteCourse(id) {
        return await Course.findByIdAndDelete(id);
    }
}

export default{
    CourseRepository
}