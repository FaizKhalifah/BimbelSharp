import StudentRepository from "../repositories/StudentRepository.js";
import {formateData} from "../utils/index.js";
import {APIError} from "../utils/app-errors.js";

class StudentService{
    constructor() {
        this.repository = new StudentRepository();

    }

    async createStudent(studentData){
        try{
            const isAvailable = await this.repository.findById(id);
            if(isAvailable){
                throw new APIError("Student already exist");
            }
            const createStudentResult = await this.repository.create(studentData);
            return formateData(createStudentResult);
        }catch(err){
            throw new APIError("data not found");
        }
    }

    async getAllStudent(){
        try{
            const students = await this.repository.findAll();
            return formateData(students);
        }catch(err){
            throw new APIError("data not found");
        }
    }

    async getStudentById(id){
        try{
            const student = await this.repository.findById(id);
            return formateData(student);
        }catch(err){
            throw new APIError("student not found");
        }
    }

    async updateStudent(id,data){
        try{
            const isAvailable = await this.repository.findById(id);
            if(!isAvailable){
                throw new APIError("Student not found");
            }
            const updatedStudent = await this.repository.update(id,data);
            return formateData(updatedStudent);
        }catch(err){
            throw new APIError("error updating data");
        }
    }

    async deleteStudent(id){
        try{
            const isAvailable = await this.repository.findById(id);
            if(!isAvailable){
                throw new APIError("Student not found");
            }
            const deletedStudent = await this.repository.delete(id);
            return formateData(deletedStudent);
        }catch(err){
            throw new APIError("Error deleting data");
        }
    }
}