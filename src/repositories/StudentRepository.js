import Student from "../models/Student.js";

class StudentRepository{
    async createStudent(data){
        const student = new Student(data);
        return await student.save();
    }

    async getAllStudent(){
        const students = await Student.find();
        return students;
    }

    async getStudentById(id){
        const student = await Student.findById(id);
        return student;
    }

    async updateStudent(id,data){
        const updatedStudent = await Student.findByIdAndUpdate(id,data);
        return updatedStudent;
    }

    async deleteStudent(id){
        const deletedStudent = await Student.findByIdAndDelete(id);
        return deletedStudent;
    }
}

export default StudentRepository;