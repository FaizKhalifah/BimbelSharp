import StudentRepository from "../repositories/StudentRepository.js";
import {formateData} from "../utils/index.js";
import {APIError} from "../utils/app-errors.js";

class StudentService{
    constructor() {
        this.repository = new StudentRepository();

    }

    async createStudent(studentData){
        try{
            const createStudentResult = await this.repository.createStudent(studentData);
            return formateData(createStudentResult);
        }catch(err){
            throw new APIError("data not found");
        }
    }

    async getAllStudent(){

    }

    async getStudentById(id){

    }
}