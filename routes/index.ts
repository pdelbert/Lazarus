import { Router } from "express";
import v1Routes from "./v1";

const usersRoute = Router();

usersRoute.use('/v1', v1Routes);

export default usersRoute;