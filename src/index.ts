import express from "express";
import dotenv from "dotenv";
import { bookRoutes } from "./routes/bookRoutes";
import { connectDb } from "./config/db";

// ✅ Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ✅ Prefijo para todas las rutas de libros
app.use("/api-book", bookRoutes);

app.listen(PORT, () => {
  console.log(`✅ Servidor HTTP en escucha en el puerto ${PORT}`);
  connectDb();
});
