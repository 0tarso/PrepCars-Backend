import z from "zod";

export const userSchema = z.object({
  uid: z.string().nullable(),
  email: z.email().nullable(),
  name: z.string().nullable()
})

export type UserProfileDTO = z.infer<typeof userSchema>