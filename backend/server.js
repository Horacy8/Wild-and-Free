import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import productRouter from "./routers/productRouter.js";

const app = express();
mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost:27017/narave",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
