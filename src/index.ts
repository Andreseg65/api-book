import express from "express";
import dotenv from "dotenv";
import { bookRoutes } from "./routes/bookRoutes";
import { connectDb } from "./config/db";

//process.loadEnvFile()
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`✅ Servidor HTTP en escucha en el puerto ${PORT}`);
  connectDb();
});
