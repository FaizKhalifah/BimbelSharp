import Course from "../models/Course.js";

async function createCourse(data) {
    const course = new Course(data);
    return await course.save();
}

async function getAllCourse() {
    const courses = await Course.find();
    return courses;
}

async function getCourseById(id) {
    const course = await Course.findById(id);
    return course;
}

async function updateCourse(id, data){
    return await Course.findByIdAndUpdate(id,data,{new:true});
}

async function deleteCourse(id) {
    return await Course.findByIdAndDelete(id);
}

export default{
    getAllCourse,getCourseById,createCourse,updateCourse,deleteCourse
}