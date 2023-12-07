import express from "express";
import cors from "cors";
import controller from "../controller/controller.js";

class App{
  #app;
  constructor(){
    this.#app = express();
    this.#middlewares();
    this.#routes();
  }
  #middlewares(){
    this.#app.use(cors());
    this.#app.use(express.json());
    this.#app.use(express.static("public"));
  }
  #routes(){ 
    this.#app.get("/:prompt", (req, res) => {
      const controller_router = new controller();
      return controller_router.get(req, res);
    });
  }
  server(){
    return this.#app;
  }
}

export default new App();