import StudentRepository from "../repositories/StudentRepository.js";
import utils from "../utils/index.js";
import appErrors from "../utils/app-errors.js";

const {formateData} = utils;
const {ConflictError, BadRequestError, InternalError} = appErrors;

class StudentService{
    constructor() {
        this.repository = new StudentRepository();

    }

    async createStudent(studentData){
        try{
            const isAvailable = await this.repository.findByEmail(studentData.email);
            if(isAvailable){
                throw new ConflictError("Student already exist");
            }
            const createStudentResult = await this.repository.create(studentData);
            return formateData(createStudentResult);
        }catch(err){
            console.log(err);
            throw new InternalError("Error creating student");
        }
    }

    async getAllStudent(){
        try{
            const students = await this.repository.findAll();
            return formateData(students);
        }catch(err){
            throw new InternalError("data not found");
        }
    }

    async getStudentById(id){
        try{
            const student = await this.repository.findById(id);
            if(!student){
                throw new BadRequestError("Student not found");
            }
            return formateData(student);
        }catch(err){
            throw new InternalError("student not found");
        }
    }

    async updateStudent(id,data){
        try{
            const isAvailable = await this.repository.findById(id);
            if(!isAvailable){
                throw new BadRequestError("Student not found");
            }
            const updatedStudent = await this.repository.update(id,data);
            return formateData(updatedStudent);
        }catch(err){
            throw new InternalError("error updating data");
        }
    }

    async deleteStudent(id){
        try{
            const isAvailable = await this.repository.findById(id);
            if(!isAvailable){
                throw new BadRequestError("Student not found");
            }
            const deletedStudent = await this.repository.delete(id);
            return formateData(deletedStudent);
        }catch(err){
            throw new InternalError("Error deleting data");
        }
    }
}

export default new StudentService();