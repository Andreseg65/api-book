import { Router } from "express";
import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController";

const router = Router();

router.get("/books", getBooks);
router.get("/books/:id", getBookById);
router.post("/books", createBook);
router.patch("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

export { router as bookRoutes };
