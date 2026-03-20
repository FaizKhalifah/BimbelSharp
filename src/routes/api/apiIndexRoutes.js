import express from "express";
import studentRouter from "./studentRoutes.js";

const apiRouter = express.Router();

apiRouter.use("/api/students/",studentRouter);

export default apiRouter;