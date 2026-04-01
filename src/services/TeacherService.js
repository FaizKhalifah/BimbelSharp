import TeacherRepository from "../repositories/TeacherRepository.js";
import utils from "../utils/index.js";
import appErrors from "../utils/app-errors.js";

const {formateData} = utils;
const {ConflictError, BadRequestError, InternalError} = appErrors;

class TeacherService{
    constructor(){
        this.repository = new TeacherRepository();
    }

    async createTeacher(teacherdata){
        const isAvailable = await this.repository.findByEmail(teacherdata.email)
        if(isAvailable){
            throw new ConflictError("Teacher already exist");
        }
        const createTeacherResult = await this.repository.create(teacherdata);
        return formateData(createTeacherResult);
    }

    async getAllTeachers(){ 
        const teachers = await this.repository.findAll();
        return formateData(teachers);
    }

    async getTeacherById(id){
        const teacher = await this.repository.findById(id);
        if(!teacher){
            throw new BadRequestError("Teacher not found");
        }
        return formateData(teacher);
    }

    async updateTeacher(id,teacherData){
        const isAvailable = await this.repository.findById(id);
        if(!isAvailable){
            throw new BadRequestError("Teacher not found");
        }
        const updateTeacherResult = await this.repository.update(id,teacherData);
        return formateData(updateTeacherResult);
    }

    async deleteTeacher(id){
        const isAvailable = await this.repository.findById(id);
        if(!isAvailable){
            throw new BadRequestError("Teacher not found");
        }
        const deleteTeacherResult = await this.repository.delete(id);
        return formateData(deleteTeacherResult);
    }
}

export default new TeacherService();