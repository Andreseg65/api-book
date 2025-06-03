import express from "express";
import bookRoutes from "./routes/bookRoutes";
import { connectDb } from "./config/db";

process.loadEnvFile();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", bookRoutes);

app.listen(PORT, () => {
  console.log(`✅ Servidor HTTP en escucha en el puerto ${PORT}`);
  connectDb();
});
