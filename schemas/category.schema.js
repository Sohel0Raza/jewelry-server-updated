import { Schema } from "mongoose";

const categorySchema = new Schema({
    name:{type:String, required:true, unique: true}
})

export default categorySchema;