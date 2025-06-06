import { Request, Response } from "express";
import { BookModel } from "../models/bookModel";
import {
  validateBookData,
  validatePartialBookData,
} from "../validations/bookValidation";

const getBooks = async (_req: Request, res: Response): Promise<any> => {
  try {
    const books = await BookModel.find();
    return res.json({
      success: true,
      data: books,
      message: "Libros obtenidos correctamente",
    });
  } catch (error) {
    const err = error as Error;
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getBookById = async (req: Request, res: Response): Promise<any> => {
  try {
    const book = await BookModel.findById(req.params.id);
    if (!book)
      return res.status(404).json({
        success: false,
        message: "Libro no encontrado",
      });
    return res.json(book);
  } catch (error) {
    const err = error as Error;
    return res.status(400).json({
      message: err.message,
      success: false,
    });
  }
};

// Acá estoy probando la validación de datos con Zod para asegurarme de que los datos del libro sean correctos.
const createBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const validator = validateBookData.safeParse(req.body);
    if (!validator.success) {
      return res.status(400).json({
        success: false,
        message: validator.error?.issues,
      });
    }
    const book = new BookModel(validator.data);
    const saved = await book.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: "Error interno al crear el libro" });
  }
};

const updateBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const validator = validatePartialBookData.safeParse(req.body);
    if (!validator.success) {
      return res.status(400).json({
        success: false,
        message: validator.error?.issues,
      });
    }

    const updatedBook = await BookModel.findByIdAndUpdate(
      req.params.id,
      validator.data,
      { new: true }
    );
    if (!updatedBook)
      return res.status(404).json({
        success: false,
        message: "Libro no encontrado",
      });
    return res.json({
      success: true,
      data: updatedBook,
      message: "Libro actualizado correctamente",
    });
  } catch (error) {
    const err = error as Error;
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

const deleteBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const deleted = await BookModel.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Libro no encontrado" });
    return res.json({
      success: true,
      message: "Libro eliminado",
    });
  } catch (error) {
    const err = error as Error;
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export { getBooks, getBookById, createBook, updateBook, deleteBook };
