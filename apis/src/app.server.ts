import express, { Application, Response } from "express";
// import bodyParser from "body-parser";

const SERVER_PORT = 3030;
console.log(process.env.DB_HOST);

// const cors = require("cors");

// const { env } = process;

class Server {
  app: Application;

  constructor() {
    this.app = express();
    // this.app.use(bodyParser.json());
    // this.app.use(cors());
  }

  serve = () => {
    this.app.get("/", (_, response: Response) => {
      response.send("it works");
    });

    this.app.listen(SERVER_PORT, () => {
      console.log(`server started at port ... ${SERVER_PORT}`);
    });
  };
}

export default Server;
