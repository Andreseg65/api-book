import { z } from "zod";
import { literaryGenres } from "../utils/literaryGenres";

const validateBookData = z.object({
  title: z.string().min(1, "El título es obligatorio"),
  author: z.string().min(1, "El autor es obligatorio"),
  publishedYear: z.number().optional(),
  genre: z.enum(literaryGenres as [string, ...string[]]).optional(),
  available: z.boolean().optional(),
});

const validatePartialBookData = validateBookData.partial();

export { validateBookData, validatePartialBookData };
