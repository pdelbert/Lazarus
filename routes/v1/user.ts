import { Router } from "express";
import { getAll, findUser, createNewUser, updateExistingUser, loginUser } from "../../controller/userController";
import { authorization } from "../../middleware/authorization.middleware";

const usersRoute = Router();

usersRoute.get('/', getAll);
usersRoute.post('/', authorization, createNewUser);

usersRoute.post('/login', loginUser);

usersRoute.get('/:id', authorization, findUser);
usersRoute.post('/:id', authorization, updateExistingUser);


export default usersRoute;
