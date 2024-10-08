import {Schema}  from "mongoose";

 const jewelrySchema = new Schema({
  sellerName: { type: String, required: true },
  sellerEmail: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  categoryId: { type: String, required: true },
  material: { type: String, required: true },
  weight: { type: String, required: true },
  itemAvailability: { type: Boolean, required: true },
  description: { type: String, minLength:[20, "Description should be at least 20 Chreacter"], maxLength: 500, required: true },
});

export default jewelrySchema;

