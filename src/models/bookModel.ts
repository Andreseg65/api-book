import { Schema, model } from "mongoose";
import { literaryGenres } from "../utils/literaryGenres";

const bookSchema = new Schema({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  publishedYear: { type: Number },
  genre: { type: String, required: true, enum: literaryGenres },
  available: { type: Boolean, default: true },
});

const BookModel = model("Book", bookSchema);

export { BookModel };
