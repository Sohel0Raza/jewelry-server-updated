import jewelrySchema from "../schemas/jewelry.schem.js";
import mongoose from "mongoose";
const jewelryModel = mongoose.model("Jewelry", jewelrySchema);

export const getAllJewelry = async (req, res) => {
  try {
    const jewelrys = await jewelryModel.find();
    res.status(200).send(jewelrys);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

export const getOneJewelry = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await jewelryModel.findById(id);
console.log('✌️result --->', result);
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
      categoryId: newJewelry.categoryId,
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
    const id = req?.params?.id;
    console.log("✌️id --->", id);
    const option = { upsert: true, returnDocument: "after" };
    const jewelry = req.body;

    if (jewelry.name.length < 5) {
      throw new Error("Jewelry name should be mimimum 5 character");
    }

    const updatedJewelry = {
      $set: {
        name: jewelry.name,
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
