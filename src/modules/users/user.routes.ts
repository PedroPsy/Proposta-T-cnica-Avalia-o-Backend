import { Router } from "express";
import { UserController } from "./user.controller";
import { authMiddleware } from "../../middlewares/auth.middlewares";
const userController = new UserController();
const userRoutes = Router();

userRoutes.post("/", (req, res) => userController.create(req, res));

// Rotas protegidas
userRoutes.get("/", authMiddleware, (req, res) => userController.list(req, res));
userRoutes.get("/:id", authMiddleware, (req, res) => userController.getById(req, res));
userRoutes.put("/:id", authMiddleware, (req, res) => userController.update(req, res));
userRoutes.delete("/:id", authMiddleware, (req, res) => userController.delete(req, res));
userRoutes.patch("/:id/password", authMiddleware, (req, res) =>
  userController.changePassword(req, res)
);

export default userRoutes;