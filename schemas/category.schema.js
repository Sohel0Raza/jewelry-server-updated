import { Schema } from "mongoose";

const categorySchema = new Schema({
    category:{type:String, required:true}
})

export default categorySchema;