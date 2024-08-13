import express from "express";
import {
  deleteJewelry,
  createJewelry,
  getAllJewelry,
  updateJewelry,
  getOneJewelry,
} from "../controllers.js/jewelry.controller.js";
const jewelryRouter = express.Router();

jewelryRouter.get("/", getAllJewelry);
jewelryRouter.get("/:id", getOneJewelry);
jewelryRouter.post("/", createJewelry);
jewelryRouter.delete("/:id", deleteJewelry);
jewelryRouter.put("/:id", updateJewelry);

export default jewelryRouter;
