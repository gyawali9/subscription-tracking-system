import express from "express";

import { PORT } from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to subscriptio tracker");
});

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});

export default app;
