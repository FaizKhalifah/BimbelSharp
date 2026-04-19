import courseService from "../../services/courseService.js";
import courseValidator from "../../validators/courseValidator.js";
import courseDTO from "../../DTO/courseDTO.js";

class CourseController{
   async create(req,res,next){
    try{
        const requestDTO = courseDTO.createCourseDTO(req.body);
        courseValidator.createCourseSchema.parse(requestDTO);
        const course = await courseService.createCourse(requestDTO);
        res.status(201).json(course);
    }catch(err){
        next(err);
    }
   }

   async getAll(req,res,next){
    try{
        const { page = 1, limit = 10 } = req.query;
        const courses = await courseService.getAllCourse({
            page: Number(page),
            limit: Number(limit)
        });
        res.status(200).json(courses);
    }catch(err){
        next(err);
    }
   }

   async getById(req,res,next){
    try{
        const courseId = req.params.id;
        courseValidator.objectIdSchema.parse(courseId);
        const course = await courseService.getCourseById(courseId);
        res.status(200).json(course);
    }catch(err){
        next(err);
    }
   }

   async update(req,res,next){
    try{
        const courseId = req.params.id;
        courseValidator.objectIdSchema.parse(courseId);
        const dto = courseDTO.updateCourseDTO(req.body);
        courseValidator.updateCourseSchema.parse(dto);
        const updateResult = await courseService.updateCourse(courseId,dto);
        res.status(200).json(updateResult);
    }catch(err){
        next(err);
    }
   }

   async delete(req,res,next){
    try{
        const courseId = req.params.id;
        courseValidator.objectIdSchema.parse(courseId);
        const deleteResult = await courseService.deleteCourse(courseId);
        res.status(200).json(deleteResult);
    }catch(err){
        next(err);
    }
   }

   async enrollStudent(req,res,next){
    try{
        const requestDTO = courseDTO.enrollStudentDTO(req.body);
        courseValidator.enrollStudentSchema.parse(requestDTO);
        const enrollment = await courseService.enrollStudent(requestDTO);
        res.status(201).json(enrollment);
    }
    catch(err){
        next(err);
    }
   }
}

export default new CourseController();