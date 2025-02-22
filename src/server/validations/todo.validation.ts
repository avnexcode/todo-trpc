import { z } from "zod";

export const createTodoRequest = z.object({
  text: z.string().min(1).max(100).toLowerCase(),
});

export const updateTodoRequest = createTodoRequest.partial();
