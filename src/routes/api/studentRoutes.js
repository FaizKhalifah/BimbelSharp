import express from "express";
import StudentController from "../../controllers/api/StudentController.js";

const studentRouter = express.Router();

studentRouter.get("/",StudentController.getAll);
studentRouter.get("/:id",StudentController.getById);
studentRouter.post("/",StudentController.create);
studentRouter.put("/:id",StudentController.update);
studentRouter.delete("/:id",StudentController.delete);

export default studentRouter;