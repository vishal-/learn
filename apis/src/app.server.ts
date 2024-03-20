import express, { Application, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import SubjectController from "./controllers/subject.controller";

const { env } = process;

class Server {
  app: Application;

  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }

  serve = () => {
    this.app.get("/subject", SubjectController.getAll);
    this.app.get("/", (_, response: Response) => {
      response.send("it works");
    });

    this.app.post("/subject", SubjectController.add);

    this.app.put(SubjectController.endpoint, SubjectController.update);

    this.app.listen(env.APP_PORT, () => {
      console.log(`server started at port ... ${env.APP_PORT}`);
    });
  };
}

export default Server;
