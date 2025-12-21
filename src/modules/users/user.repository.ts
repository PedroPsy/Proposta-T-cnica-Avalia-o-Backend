import { prisma } from "../../config/prisma";
import { User } from "@prisma/client";

export class UserRepository {
  async create(data: {
    name: string;
    email: string;
    password: string;
  }): Promise<User> {
    return prisma.user.create({
      data,
    });
  }

  async findAll(skip: number, take: number): Promise<User[]> {
    return prisma.user.findMany({
      skip,
      take,
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  async update(
    id: string,
    data: Partial<Pick<User, "name" | "email" | "password">>
  ): Promise<User> {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: { id },
    });
  }
}
