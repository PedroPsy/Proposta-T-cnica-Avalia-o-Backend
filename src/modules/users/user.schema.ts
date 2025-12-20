import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});


export const updateUserSchema = z.object({
  name: z.string().min(3).optional(),
  email: z.string().email().optional(),
});

export const updatePasswordSchema = z.object({
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;
export type UpdateUserDTO = z.infer<typeof updateUserSchema>;
export type UpdatePasswordDTO = z.infer<typeof updatePasswordSchema>;
