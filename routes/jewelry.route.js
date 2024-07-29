import express from "express";
import {
  deleteJewelry,
  createJewelry,
  getAllJewelry,
  updateJewelry,
} from "../controllers.js/jewelry.controller.js";
const router = express.Router();

router.get("/", getAllJewelry);
router.get("/:id", getAllJewelry);
router.post("/", createJewelry);
router.delete("/:id", deleteJewelry);
router.put("/:id", updateJewelry);

export default router;
