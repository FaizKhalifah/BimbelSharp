import courseService from "../../services/courseService.js";
import TeacherService from "../../services/TeacherService.js";

class CourseViewController{

    async index(req,res){
        try{
            const result = await courseService.getAllCourse({
                page: 1,
                limit: 20
            });
            res.render("pages/course/index",{
                title:"Course List",
                courses: result.data.data,
                page: result.data.page,
                limit: result.data.limit
            });
        }
        catch (err) {
            next(err);
        }

    }

    async create(req,res){
        try{
            const teachers = await TeacherService.getAllTeachers();
            res.render("pages/course/create", 
                { title: "Add Course", 
                teachers:teachers.data
                });
        }catch(err) {
            next(err);
        }
    }

    async store(req,res){
        try{
            await courseService.createCourse(req.body);
            res.redirect("/courses");
        }
        catch (err) {
            next(err);
        }
    }

    async detail(req,res){
        try{
            const result = await courseService.getCourseById(req.params.id)
            res.render("pages/course/detail", {
                title: "Detail Course",
                course: result.data
            })
        }catch (err) {
            next(err);
        }
    }

    async edit(req,res){
        try{
            const result = await courseService.getCourseById(req.params.id);
            
            res.render("pages/course/edit", {
                title: "Edit Course",
                course: result.data
            });
            
        }
        catch (err) {
            next(err);
        }

    }

    async update(req,res){
        try{
            await courseService.updateCourse(req.params.id,req.body);
            res.redirect("/courses")
        }
        catch (err) {
            next(err);
        }
    }

    async delete(req,res){
        try{
            await courseService.deleteCourse(req.params.id);
            res.redirect("/courses")
        }
        catch (err) {
            next(err);
        }
    }

}

export default new CourseViewController();