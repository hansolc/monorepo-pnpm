import z from "zod";

export const signUpFromSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().trim(),
});
