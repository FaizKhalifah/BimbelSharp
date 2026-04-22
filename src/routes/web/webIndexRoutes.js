import express from "express";
import teacherViewRoutes from "./teacherViewRoutes.js";

const viewRouter = express.Router();

viewRouter.use(teacherViewRoutes);

export default viewRouter;