import express from "express";
import studentRouter from "./studentRoutes.js";
import teacherRouter from "./teacherRoutes.js";
import courseRouter from "./courseRoutes.js";

const apiRouter = express.Router();

apiRouter.use("/api/students/",studentRouter);
apiRouter.use("/api/teachers/",teacherRouter);
apiRouter.use("/api/courses/",courseRouter);

export default apiRouter;