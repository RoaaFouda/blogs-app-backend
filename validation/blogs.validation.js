import z from "zod";

export const createBlogSchema = z.object({
  title: z.string().min(3).max(20).trim(),
  description: z.string().min(10).max(200).trim(),
  coverImage: z.string(),
  content: z.string().min(20),
});

export const updateBlogSchema = z.object({
  title: z.string().min(3).max(20).trim().optional(),
  description: z.string().min(10).max(200).trim().optional(),
  coverImage: z.string().optional(),
  content: z.string().min(20).optional(),
}).passthrough().refine((obj) => Object.keys(obj).length > 0, {
  message: 'At least one field is required',
});
