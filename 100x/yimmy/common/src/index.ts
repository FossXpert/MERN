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

export const courseInput = z.object({
    id : z.string(),
    title: z.string().min(3).max(160),
    description: z.string().min(3).max(500),
    imageLink : z.string(),
    price: z.number()
})
export type signupUser = z.infer<typeof signupInput>
export type signinUser = z.infer<typeof signinInput>
export type zodCourseDetail = z.infer<typeof courseInput>

// Learning :- see here zod acting as backend verification for incoming as well it acting as type infer
// export type signupUser = z.infer<typeof signupInput>
// export type signinUser = z.infer<typeof signinInput>
// This is called type infer