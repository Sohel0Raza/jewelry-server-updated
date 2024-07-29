import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import  router  from "./routes/jewelry.route.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.q6zwl04.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/jewelryDB`;

async function run() {
  // Connect to mongoose
  await mongoose.connect(uri);
}

run()
.then(() => console.log("connect mongoose"))
.catch((e) => console.log(e));

app.use("/api/jewelrys", router);

app.listen(port, () => {
  console.log(`Sparkle Gems server is running on port:${port}`);
});
