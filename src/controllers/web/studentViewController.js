import studentService from "../../services/StudentService.js"

class StudentViewController{
    async index(req,res,next){
        try{
            const result = await studentService.getAllStudent();
            res.render("pages/student/index",{
                title:"Student List",
                students:result.data
            })
        }
        catch (err) {
            next(err);
        }
    }

    async create(req,res){
        res.render("pages/student/create", { title: "Add Student" });
    }

    async store(req,res,next){
        try{
            await studentService.createStudent(req.body);
            res.redirect("/students");
        }
        catch (err) {
            next(err);
        }
    }

    async detail(req,res,next){
        try{
            const result = await studentService.getStudentById(req.params.id);
            res.render("pages/student/detail", {
                title: "Detail Student",
                student: result.data
            })
        }catch (err) {
            next(err);
        }
    }

    async edit(req,res,next){
        try{
            const result = await studentService.getStudentById(req.params.id);
            
            res.render("pages/student/edit", {
                title: "Edit Student",
                student: result.data
            });
            
        }
        catch (err) {
            next(err);
        }
    }

    async update(req,res,next){
        try{
            await studentService.updateStudent(req.params.id,req.body);
            res.redirect("/students")
        }
        catch (err) {
            next(err);
        }
    }

    async delete(req,res,next){
        try{
            await studentService.deleteStudent(req.params.id);
            res.redirect("/students")
        }
        catch (err) {
            next(err);
        }
    }
}

export default new StudentViewController();