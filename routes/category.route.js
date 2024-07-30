import expess from "express"
import { createCategory, deleteCategory, getCategory, updateCategory } from "../controllers.js/category.controller.js"

const categoryRouter = expess.Router()

categoryRouter.get("/", getCategory)
categoryRouter.post("/", createCategory)
categoryRouter.put("/:id", updateCategory)
categoryRouter.delete("/:id", deleteCategory)

export default categoryRouter;
