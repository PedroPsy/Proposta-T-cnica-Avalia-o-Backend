import express from "express";
import routes from "./routes/index";

const app = express();

app.use(express.json());
app.use(routes);
app.get("/ping", (req, res) => {
  res.json({ ok: true });
});


export default app;
