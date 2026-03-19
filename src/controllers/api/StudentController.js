import StudentService from "../../services/StudentService.js";
import studentDTO from "../../DTO/studentDTO.js";
import studentValidators from "../../validators/studentValidators.js";

class StudentController{
    async create(req,res,next){
        try{
            const requestDTO = studentDTO.createStudentDTO(req.body);
            studentValidators.createStudentSchema.parse(requestDTO);
            const student = await StudentService.createStudent(requestDTO);
            return res.status(201).json(student);
        }catch(err){
            next(err);
        }
    }
}

export default new StudentController();