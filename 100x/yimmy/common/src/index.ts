import { z } from "zod";

export const signupInput = z.object({
    email : z.string().email(),
    username : z.string().min(3).max(24),
    password : z.string().min(1).max(128)
});

export const signinInput = z.object({
    username : z.string().min(3).max(24),
    password : z.string().min(1).max(128)
});

export type signupUser = z.infer<typeof signupInput>
export type signinUser = z.infer<typeof signinInput>

