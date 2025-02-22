import { z } from "zod";

export const createTodoFormSchema = z.object({
  text: z.string().min(1).max(150),
});

export const updateTodoFormSchema = createTodoFormSchema.partial();
