import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import jewelryRouter from "./routes/jewelry.route.js";
import categoryRouter from "./routes/category.route.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

app.use("/api/jewelrys", jewelryRouter);
app.use("/api/categories", categoryRouter);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.q6zwl04.mongodb.net/jawelryDB?retryWrites=true&w=majority&appName=Cluster0/jewelryDB`;

async function run() {
  // Connect to mongoose
  await mongoose.connect(uri, {
    autoIndex: true, //make this also true
  });
}

run()
  .then(() => console.log("connect mongoose"))
  .catch((e) => console.log(e));

app.listen(port, () => {
  console.log(`Sparkle Gems server is running on port:${port}`);
});
