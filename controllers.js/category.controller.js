import mongoose from "mongoose";
import categorySchema from "../schemas/category.schema.js";

const categoryModel = mongoose.model("category", categorySchema);

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
    const category = req.body;
    const categoryDoc = new categoryModel();

    categoryDoc.name = category.name;

    const createResponse = await categoryDoc.save();
    res.status(200).send(createResponse);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const id = req?.params?.id;
    const option = { 
      upsert: true,
      returnDocument:'after'
     };
    const category = req.body;

    const updatedCategory = {
      $set: {
        name: category.name,
      },
    };

    const updateResponse = await categoryModel.findByIdAndUpdate(id, updatedCategory, option)

    res.status(200).send(updateResponse);
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
