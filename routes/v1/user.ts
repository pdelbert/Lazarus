import express from "express";
import { getAll, findUser, createNewUser, updateExistingUser } from "../../controller/userController";

const usersRoute = express.Router();

usersRoute.get('/', getAll);
usersRoute.get('/:id', findUser);
usersRoute.post('/', createNewUser);
usersRoute.post('/:id', updateExistingUser);

export default usersRoute;
