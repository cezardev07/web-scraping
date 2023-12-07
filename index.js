import { fileURLToPath } from "url";
import { dirname } from "path";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import app from "./app/app.js";

const server =  app.server();

server.use("/public", express.static("public"));

server.get("/", (_req, res) => {
  return res.sendFile(`${__dirname}/public/index.html`);
});

server.listen(3333, () => {
  console.log("server is running");
});
