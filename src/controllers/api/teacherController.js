import teacherService from "../../services/TeacherService.js";
import teacherDTO from "../../DTO/teacherDTO.js";
import teacherValidator from "../../validators/teacherValidators.js";

class TeacherController{
    async create(req,res,next){
            try{
                const requestDTO =teacherDTO.createTeacherDTO(req.body);
                teacherValidator.createTeacherSchema.parse(requestDTO);
                const teacher = await teacherService.createTeacher(requestDTO);
                res.status(201).json(teacher);
            }catch(err){
                next(err);
            }
        }
    
        async getAll(req,res,next){
            try{
                const teachers = await teacherService.getAllTeachers();
                res.status(200).json(teachers);
            }catch(err){
                next(err)
            }
        }
    
        async getById(req,res,next){
            try{
                const teacherID = req.params.id;
                teacherValidator.objectIdSchema.parse(teacherID);
                const teacher = await teacherService.getTeacherById(teacher);
                res.status(200).json(teacher);
            }catch(err){
                next(err);
            }
        }
    
        async update(req,res,next){
            try{
                const teacherID = req.params.id;
                teacherValidator.objectIdSchema.parse(teacherID);
                const dto = teacherDTO.updateTeacherDTO(req.body);
                teacherValidator.updateTeacherSchema.parse(dto);
                const updateResult = await teacherService.updateTeacher(teacherID,dto);
                res.status(200).json(updateResult);
            }catch(err){
                next(err);
            }
        }
    
        async delete(req,res,next){
            try{
                const teacherID = req.params.id;
                teacherValidator.objectIdSchema.parse(teacherID);
                const deleteResult = await teacherService.deleteTeacher(teacherID);
                res.json(200).json(deleteResult);
            }catch(err){
                next(err);
            }
        }
}

export default new TeacherController();