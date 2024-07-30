import express from "express";
import {
  deleteJewelry,
  createJewelry,
  getAllJewelry,
  updateJewelry,
} from "../controllers.js/jewelry.controller.js";
const jewelryRouter = express.Router();

jewelryRouter.get("/", getAllJewelry);
jewelryRouter.get("/:id", getAllJewelry);
jewelryRouter.post("/", createJewelry);
jewelryRouter.delete("/:id", deleteJewelry);
jewelryRouter.put("/:id", updateJewelry);

export default jewelryRouter;
