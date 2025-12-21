import { Router } from "express";
import { UserController } from "./user.controller";
const userController = new UserController();
const userRoutes = Router();

userRoutes.post("/", (req, res) => userController.create(req, res));
userRoutes.get("/", (req, res) => userController.list(req, res));
userRoutes.get("/:id", (req, res) => userController.getById(req, res));
userRoutes.put("/:id", (req, res) => userController.update(req, res));
userRoutes.delete("/:id", (req, res) => userController.delete(req, res));
userRoutes.patch("/:id/password", (req, res) =>
  userController.changePassword(req, res)
);

export default userRoutes;