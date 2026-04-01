import express from "express";
import studentRouter from "./studentRoutes.js";
import teacherRouter from "./teacherRoutes.js";

const apiRouter = express.Router();

apiRouter.use("/api/students/",studentRouter);
apiRouter.use("/api/teachers/",teacherRouter)

export default apiRouter;