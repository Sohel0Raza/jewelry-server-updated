import mongoose from "mongoose";
import categorySchema from "../schemas/category.schema.js";

const categoryModel = mongoose.model("categorys", categorySchema);

export const getCategory = async (req, res) => {
  try {
    const result = await categoryModel.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

export const createCategory = async (req, res) => {
  try {
    const newCategory = req.body;
    const categoryDoc = new categoryModel({
      category: newCategory.category,
    });
    const result = await categoryDoc.save();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const option = { upsert: true };
    const category = req.body;
    const updatedCategory = {
      $set: {
        category: category.category,
      },
    };
    const result = await categoryModel.findByIdAndUpdate(
      id,
      updateCategory,
      option
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await categoryModel.findByIdAndDelete(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
