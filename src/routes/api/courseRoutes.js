import express from "express";
import courseController from "../../controllers/api/courseController.js";

const courseRouter = express.Router();

courseRouter.get("/",courseController.getAll);
courseRouter.get("/:id",courseController.getById);
courseRouter.post("/",courseController.create);
courseRouter.post("/enrollStudent/:studentId",courseController.enrollStudent);
courseRouter.post("/removeStudent/:studentId",courseController.removeStudent);
courseRouter.put("/:id",courseController.update);
courseRouter.delete("/:id",courseController.delete);


export default courseRouter;