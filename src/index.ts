import express, { Request, Response } from "express";
import usersRoute from "./routes/users.route";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(usersRoute);

app.listen(8000, () => console.log("servidor rodando na porta 8000"));
