import { Router, Response, Request } from "express";
import getUsers from "../controllers/users/getUsers";
import getUserByID from "../controllers/users/getUserByID";
import createUser from "../controllers/users/createUser";
import updateUser from "../controllers/users/updateUser";
import deleteUser from "../controllers/users/deleteUser";

const usersRoute = Router();

usersRoute.get("/users", getUsers);

usersRoute.get("/users/:uuid", getUserByID);

usersRoute.post("/users", createUser);

usersRoute.put("/users/:uuid", updateUser);

usersRoute.delete("/users/:uuid", deleteUser);

export default usersRoute;
