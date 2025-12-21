import { Router } from "express";

const routes = Router();

routes.get("/health", (_, res) => {
  return res.json({ status: "ok" });
});

export default routes;
