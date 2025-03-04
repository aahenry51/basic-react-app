import express from "express";
import cors from "cors";
import { routerLogin } from "./routes/login.js";

const app = express();
const port = 4000;

// CORS
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/api", routerLogin);
