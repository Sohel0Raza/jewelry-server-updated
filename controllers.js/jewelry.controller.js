import jewelrySchema from "../schemas/jewelry.schem.js";
import mongoose from "mongoose";
const jewelryModel = mongoose.model("Jewelry", jewelrySchema);

export const getAllJewelry = async (req, res) => {
  try {    
    const jewelrys = await jewelryModel.find();
    res.status(200).send(jewelrys);
  } catch (error) {
    res.status(500).send({
      message:error.message
    })
  }
};

export const getOneJewelry = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await jewelryModel.findOne(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

export const createJewelry = async (req, res) => {
  try {
    const newJewelry = req.body;
    const jewelryDoc = new jewelryModel({
      sellerName: newJewelry.sellerName,
      sellerEmail: newJewelry.sellerEmail,
      name: newJewelry.name,
      image: newJewelry.image,
      price: Number(newJewelry.price),
      category: newJewelry.category,
      material: newJewelry.material,
      weight: newJewelry.weight,
      itemAvailability: newJewelry.itemAvailability,
      description: newJewelry.description,
    });
    const result = await jewelryDoc.save();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

export const updateJewelry = async (req, res) => {
  try {
    const id = req.params.id;
    const option = { upsert: true };
    const jewelry = req.body;
    const updatedJewelry = {
      $set: {
        name: jewelry.jewelryName,
        price: jewelry.price,
        weight: jewelry.weight,
        description: jewelry.description,
      },
    };
    const result = await jewelryModel.findByIdAndUpdate(
      id,
      updatedJewelry,
      option
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

export const deleteJewelry = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await jewelryModel.findByIdAndDelete(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
