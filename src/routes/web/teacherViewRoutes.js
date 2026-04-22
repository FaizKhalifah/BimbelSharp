import express from "express"
import teacherViewController from "../../controllers/web/teacherViewController.js"

const teacherViewRouter = express.Router()

teacherViewRouter.get("/", controller.index);
teacherViewRouter.get("/create", controller.createPage);
teacherViewRouter.post("/", controller.store);

teacherViewRouter.get("/:id", controller.detail);
teacherViewRouter.get("/edit/:id", controller.editPage);
teacherViewRouter.post("/:id", controller.update);
teacherViewRouter.post("/delete/:id", controller.delete);

export default teacherViewRouter();