import express from "express"
import teacherViewController from "../../controllers/web/teacherViewController.js"

const teacherViewRouter = express.Router()

teacherViewRouter.get("/", teacherViewController.index);
teacherViewRouter.get("/create", teacherViewController.create);
teacherViewRouter.post("/", teacherViewController.store);

teacherViewRouter.get("/:id", teacherViewController.detail);
teacherViewRouter.get("/edit/:id", teacherViewController.edit);
teacherViewRouter.put("/:id", teacherViewController.update);
teacherViewRouter.delete("/delete/:id", teacherViewController.delete);

export default teacherViewRouter;