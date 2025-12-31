import { z } from "zod";

export const loginUserSchema = z.object({
  email: z.email("Email inválido"),
  password: z.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .max(18, "A senha deve ter no máximo 18 caracteres")
});

export type LoginUserDTO = z.infer<typeof loginUserSchema>;