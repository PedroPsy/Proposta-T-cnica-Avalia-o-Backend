import bcrypt from "bcryptjs";
import { User } from "@prisma/client";
import { UserRepository } from "./user.repository";

interface PaginatedResult<T> {
  data: T[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(data: {
    name: string;
    email: string;
    password: string;
  }): Promise<User> {
    const emailAlreadyExists = await this.userRepository.findByEmail(
      data.email
    );

    if (emailAlreadyExists) {
      throw new Error("E-mail já está em uso");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return this.userRepository.create({
      ...data,
      password: hashedPassword,
    });
  }

  async listUsers(
    page: number = 1,
    limit: number = 10
  ): Promise<PaginatedResult<User>> {
    page = Math.max(1, page);
    limit = Math.min(Math.max(1, limit), 100);

    const skip = (page - 1) * limit;

    const [data, total] = await this.userRepository.findAndCount(
      skip,
      limit
    );

    return {
      data,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    };
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    return user;
  }

  async updateUser(
    id: string,
    data: {
      name?: string;
      email?: string;
    }
  ): Promise<User> {
    await this.getUserById(id);

    if (data.email) {
      const emailAlreadyExists = await this.userRepository.findByEmail(
        data.email
      );

      if (emailAlreadyExists && emailAlreadyExists.id !== id) {
        throw new Error("E-mail já está em uso");
      }
    }

    return this.userRepository.update(id, data);
  }

  async deleteUser(id: string): Promise<void> {
    await this.getUserById(id);
    await this.userRepository.delete(id);
  }

  async changePassword(
    id: string,
    newPassword: string
  ): Promise<void> {
    await this.getUserById(id);

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await this.userRepository.update(id, {
      password: hashedPassword,
    });
  }
}
