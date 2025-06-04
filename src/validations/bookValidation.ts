import { z } from "zod";

const validateBookData = z.object({
  title: z.string().min(1, "El título es obligatorio"),
  author: z.string().min(1, "El autor es obligatorio"),
  publishedYear: z.number().optional(),
  genre: z.string().optional(),
  available: z.boolean().optional(),
});

const validatePartialBookData = validateBookData.partial();

export { validateBookData, validatePartialBookData };
