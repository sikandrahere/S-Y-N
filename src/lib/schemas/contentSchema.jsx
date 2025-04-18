import { z } from "zod";

export const contentValidation = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" }) 
    .max(50, { message: "Name must be less than 50 characters" }),
  content: z
    .string()
    .min(1, { message: "Content is required" }) 
    .max(500, { message: "Content must be less than 500 characters" }), 
  hashtags: z
    .array(z.string()) 
    .optional() 
    .min(1, { message: "At least one hashtag is required" }), 
});