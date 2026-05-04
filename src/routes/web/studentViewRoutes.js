import express from "express";
import studentViewController from "../../controllers/web/studentViewController.js";

const studentViewRouter = express.Router();

studentViewRouter.get("/",studentViewController.index);
studentViewRouter.get("/create",studentViewController.create);
studentViewRouter.post("/",studentViewController.store);

studentViewRouter.get("/:id",studentViewController.detail);
studentViewRouter.get("/edit/:id",studentViewController.edit);
studentViewRouter.post("/edit/:id",studentViewController.update);
studentViewRouter.post("/delete/:id",studentViewController.delete);

export default studentViewRouter;
