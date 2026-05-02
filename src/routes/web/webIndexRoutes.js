import express from "express";
import teacherViewRoutes from "./teacherViewRoutes.js";
import studentViewRoutes from "./studentViewRoutes.js";

const viewRouter = express.Router();

viewRouter.get("/",(req,res)=>{
    res.render("pages/index",{ title: 'Bimbelsharp' })
});
viewRouter.use("/teachers",teacherViewRoutes);
viewRouter.use("/students",studentViewRoutes);

export default viewRouter;