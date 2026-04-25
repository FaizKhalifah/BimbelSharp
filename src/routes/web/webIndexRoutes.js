import express from "express";
import teacherViewRoutes from "./teacherViewRoutes.js";

const viewRouter = express.Router();

viewRouter.get("/",(req,res)=>{
    res.render("pages/index",{ title: 'Bimbelsharp' })
});
viewRouter.use("/teachers",teacherViewRoutes);

export default viewRouter;