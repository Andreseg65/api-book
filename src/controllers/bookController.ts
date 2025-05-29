import { Request, Response } from "express";
import { BookModel } from "../models/bookModel";

const getBooks = async (_req: Request, res: Response): Promise<any> => {
  try {
    const books = await BookModel.find();
    return res.json(books);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener los libros" });
  }
};

const getBookById = async (req: Request, res: Response): Promise<any> => {
  try {
    const book = await BookModel.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Libro no encontrado" });
    return res.json(book);
  } catch {
    return res.status(400).json({ message: "ID inválido" });
  }
};

const createBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const newBook = new BookModel(req.body);
    const saved = await newBook.save();
    return res.status(201).json(saved);
  } catch (error) {
    return res.status(400).json({ message: "Error al crear el libro" });
  }
};

const updateBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const updated = await BookModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated)
      return res.status(404).json({ message: "Libro no encontrado" });
    return res.json(updated);
  } catch {
    return res.status(400).json({ message: "Error al actualizar el libro" });
  }
};

const deleteBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const deleted = await BookModel.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Libro no encontrado" });
    return res.json({ message: "Libro eliminado" });
  } catch {
    return res.status(400).json({ message: "Error al eliminar el libro" });
  }
};

export { getBooks, getBookById, createBook, updateBook, deleteBook };
