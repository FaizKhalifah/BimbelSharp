import express from "express";
import teacherController from "../../controllers/api/teacherController.js";

const teacherRouter = express.Router();

teacherRouter.get("/",teacherController.getAll);
teacherRouter.get("/:id",teacherController.getById);
teacherRouter.post("/",teacherController.create);
teacherRouter.put("/:id",teacherController.update);
teacherRouter.delete("/:id",teacherController.delete);

export default teacherRouter;