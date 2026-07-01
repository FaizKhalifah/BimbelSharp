import materialService from "../../services/materialService.js";
import courseService from "../../services/courseService.js";

class MaterialViewController{
    async index(req,res,next){
        try{
            const courseId = req.params.id;
            const result = await materialService.getMaterialByCourse({
                page: 1,
                limit: 20
            });
            res.render("pages/material/index",{
                title:"Course List",
                courses: result.data.data,
                page: result.data.page,
                limit: result.data.limit
            });
        }catch(err){
            next(err);
        }
    }

    async create(req,res,next){
        try{
            res.render("pages/material/create", 
                { title: "Add Material"
                });
        }
        catch(err){
            next(err);
        }
    }

    async store(req,res,next){
        try{
            await materialService.createMaterial(req.params.id,req.body);
            res.redirect("/courses");
        }
        catch(err){
            next(err);
        }
    }

    async detail(req,res,next){
        try{
            const material = await materialService.getMaterialById(req.params.id);
            res.render(
                "pages/material/detail",
                    {
                        title: "Detail Material",
                        material:material.data
                    }
            );
        }
         catch(err){
            next(err);
        }
        
    }
    
    async edit(req,res,next){
        try{
            res.render("pages/material/edit", {
                title: "Edit Material",
            });
        }
        catch(err){
            next(err);
        }
    }

    async update(req,res,next){
        try{

        }
        catch(err){
            next(err);
        }
    }

    async delete(req,res,next){
        try{

        }
        catch(err){
            next(err);
        }
    }


}