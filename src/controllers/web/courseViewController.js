import courseService from "../../services/courseService.js";
import TeacherService from "../../services/TeacherService.js";
import StudentService from "../../services/StudentService.js";

class CourseViewController{

    async index(req,res,next){
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

    async create(req,res,next){
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

    async store(req,res,next){
        try{
            await courseService.createCourse(req.body);
            res.redirect("/courses");
        }
        catch (err) {
            next(err);
        }
    }

    async detail(req,res,next){
        try{
            const course = await courseService.getCourseDetail(req.params.id);
            const students = await StudentService.getAllStudent();
            const result = await courseService.getCourseById(req.params.id)
             res.render(
                "pages/course/detail",
                {
                    title: "Detail Course",
                    course: course.data,
                    students: students.data
                }
            );
        }catch (err) {
            next(err);
        }
    }

    async edit(req,res,next){
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

    async update(req,res,next){
        try{
            await courseService.updateCourse(req.params.id,req.body);
            res.redirect("/courses")
        }
        catch (err) {
            next(err);
        }
    }

    async delete(req,res,next){
        try{
            await courseService.deleteCourse(req.params.id);
            res.redirect("/courses")
        }
        catch (err) {
            next(err);
        }
    }

    async enrollStudent(req,res,next){
        try{
            const courseID = req.params.id;
            const studentID = req.body.studentID;
            await courseService.enrollStudent(courseID,studentID);
            res.redirect(
            `/courses/${courseID}`
            );
        }
        catch (err) {
            next(err);
        }
    }

    async removeStudent(req,res,next){
        try{
            const courseID = req.params.id;
            const studentID = req.body.studentID;
            await courseService.removeStudent(courseID,studentID);
            res.redirect(
            `/courses/${courseID}`
            );
        }
        catch (err) {
            next(err);
        }
    }

}

export default new CourseViewController();