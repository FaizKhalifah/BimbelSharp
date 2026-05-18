import courseService from "../../services/courseService.js";

class CourseViewController{

    async index(req,res){
        try{
            const result = await courseService.getAllCourse();
            res.render("pages/course/index",{
                title:"Course List",
                courses:result.data
            })
        }
        catch (err) {
            next(err);
        }

    }

    async create(req,res){
        res.render("pages/course/create", { title: "Add Course" });
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