import teacherService from "../../services/TeacherService.js";

class TeacherViewController{
    async index(req,res,next){
        try {
            const result = await teacherService.getAllTeachers();

            res.render("pages/teacher/index", {
                title: "Teacher List",
                teachers: result.data
            });

        } catch (err) {
            next(err);
        }
    }

    async create(req,res){
        res.render("pages/teacher/create", { title: "Create Teacher" });
    }

    async store(req,res,next){
        try {
            await teacherService.createTeacher(req.body);
            res.redirect("/teachers");
        } catch (err) {
            next(err);
        }
    }

    async detail(req, res, next) {
        try {
            const result = await teacherService.getTeacherById(req.params.id);

            res.render("pages/teacher/detail", {
                title: "Detail Teacher",
                teacher: result.data
            });

        } catch (err) {
            next(err);
        }
    }

    async edit(req,res,next){
         try {
            const result = await teacherService.getTeacherById(req.params.id);

            res.render("pages/teacher/edit", {
                title: "Edit Teacher",
                teacher: result.data
            });

        } catch (err) {
            next(err);
        }
    }

    async update(req,res,next){
        try {
            await teacherService.updateTeacher(req.params.id, req.body);
            res.redirect("/teachers");
        } catch (err) {
            next(err);
        }
    }

    async delete(req,res,next){
        try {
            await teacherService.deleteTeacher(req.params.id);
            res.redirect("pages/teachers");
        } catch (err) {
            next(err);
        }
    }
}

export default new TeacherViewController();