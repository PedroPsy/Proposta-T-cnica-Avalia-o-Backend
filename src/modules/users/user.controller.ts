import { Request, Response } from "express";
import { UserService } from "./user.service";
import { createUserSchema } from "./user.schema";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

 async create(req: Request, res: Response) {
  try {
    const validatedData = createUserSchema.parse(req.body);

    const user = await this.userService.createUser(validatedData);

    const { password: _, ...userWithoutPassword } = user;
    return res.status(201).json(userWithoutPassword);
  } catch (error: any) {
    return res.status(400).json({
      message: error.message || "Erro ao criar usuário",
    });
  }
}

  async list(req: Request, res: Response) {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;

      const users = await this.userService.listUsers(page, limit);

      const usersWithoutPassword = users.map(({ password, ...rest }) => rest);

      return res.status(200).json(usersWithoutPassword);
    } catch (error: any) {
      return res.status(400).json({
        message: error.message || "Erro ao listar usuários",
      });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await this.userService.getUserById(id);

      const { password, ...userWithoutPassword } = user;

      return res.status(200).json(userWithoutPassword);
    } catch (error: any) {
      return res.status(404).json({
        message: error.message || "Usuário não encontrado",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;

      const user = await this.userService.updateUser(id, { name, email });

      const { password, ...userWithoutPassword } = user;

      return res.status(200).json(userWithoutPassword);
    } catch (error: any) {
      return res.status(400).json({
        message: error.message || "Erro ao atualizar usuário",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await this.userService.deleteUser(id);

      return res.status(204).send();
    } catch (error: any) {
      return res.status(404).json({
        message: error.message || "Usuário não encontrado",
      });
    }
  }

  async changePassword(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { password } = req.body;

      await this.userService.changePassword(id, password);

      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({
        message: error.message || "Erro ao alterar senha",
      });
    }
  }
}
