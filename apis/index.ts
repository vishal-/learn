import "dotenv/config";
import Server from "./src/app.server";

const server = new Server();
server.serve();
