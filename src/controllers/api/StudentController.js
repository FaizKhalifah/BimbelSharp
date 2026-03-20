import StudentService from "../../services/StudentService.js";
import studentDTO from "../../DTO/studentDTO.js";
import studentValidators from "../../validators/studentValidators.js";

class StudentController{
    async create(req,res,next){
        try{
            const requestDTO = studentDTO.createStudentDTO(req.body);
            studentValidators.createStudentSchema.parse(requestDTO);
            const student = await StudentService.createStudent(requestDTO);
            res.status(201).json(student);
        }catch(err){
            next(err);
        }
    }

    async getAll(req,res,next){
        try{
            const students = await StudentService.getAllStudent();
            res.status(201).json(students);
        }catch(err){
            next(err)
        }
    }

    async getById(req,res,next){
        try{
            const studentID = req.params.id;
            studentValidators.objectIdSchema.parse(studentID);
            const student = await StudentService.getStudentById(studentID);
            res.status(201).json(student);
        }catch(err){
            next(err);
        }
    }

    async update(req,res,next){
        try{
            const studentID = req.params.id;
            studentValidators.objectIdSchema.parse(studentID);

            const dto = studentDTO.updateStudentDTO(req.body);
            studentValidators.updateStudentSchema.parse(dto);
            const updateResult = await StudentService.updateStudent(studentID,dto);
            res.status(201).json(updateResult);
        }catch(err){
            next(err);
        }
    }

    async delete(req,res,next){
        try{
            const studentID = req.params.id;
            studentValidators.objectIdSchema.parse(studentID);
            const deleteResult = await StudentService.deleteStudent(studentID);
            res.json(201).json(deleteResult);
        }catch(err){
            next(err);
        }
    }
}

export default new StudentController();