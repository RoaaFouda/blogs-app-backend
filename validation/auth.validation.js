import z from "zod"

export const registerUserSchema = z.object({
    username: z.string().min(3).max(20).regex(/^[a-zA-Z0-9_-]+$/).trim(),
    email: z.string().email().trim(),
    password: z.string().min(6).max(20).trim(),
})

export const loginSchema = z.object({
    username: z.string().min(3).max(20).regex(/^[a-zA-Z0-9_-]+$/).trim(),
    password: z.string().min(6).max(20).trim(),
})