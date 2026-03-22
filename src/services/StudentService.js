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
        const isAvailable = await this.repository.findByEmail(studentData.email);
        if(isAvailable){
            throw new ConflictError("Student already exist");
        }
        const createStudentResult = await this.repository.create(studentData);
        return formateData(createStudentResult);
    }

    async getAllStudent(){
        const students = await this.repository.findAll();
        return formateData(students);
    }

    async getStudentById(id){
        const student = await this.repository.findById(id);
        if(!student){
            throw new BadRequestError("Student not found");
        }
        return formateData(student);
    }

    async updateStudent(id,data){
        const isAvailable = await this.repository.findById(id);
        if(!isAvailable){
            throw new BadRequestError("Student not found");
        }
        const updatedStudent = await this.repository.update(id,data);
        return formateData(updatedStudent);
    }

    async deleteStudent(id){
        const isAvailable = await this.repository.findById(id);
        if(!isAvailable){
            throw new BadRequestError("Student not found");
        }
        const deletedStudent = await this.repository.delete(id);
        return formateData(deletedStudent);
    }
}

export default new StudentService();