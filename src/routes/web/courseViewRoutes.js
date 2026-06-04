import express from "express";
import courseViewController from "../../controllers/web/courseViewController";

const courseViewRouter = express.Router();

courseViewRouter.get("/",courseViewController.index);
courseViewRouter.get("/create",courseViewController.create);
courseViewRouter.post("/",courseViewController.store);

courseViewRouter.get("/:id",courseViewController.detail);
courseViewRouter.get("/edit/:id",courseViewController.edit);
courseViewRouter.post("/edit/:id",courseViewController.update);
courseViewRouter.post("/delete/:id",courseViewController.delete);

export default courseViewRouter;