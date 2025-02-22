import { z } from "zod";

export const createTodoFormSchema = z.object({
  text: z
    .string()
    .min(1, "Minimal 1 karakter")
    .max(100, "Maksimal 100 karakter")
    .toLowerCase(),
});

export const updateTodoFormSchema = createTodoFormSchema.partial();
