import { Router } from "express";
import 'dotenv/config'

import routeUsers from "./user";
import routeProducts from "./products";
import routeCustomers from "./customers";

const v1Route = Router();

v1Route.use('/user', routeUsers);
v1Route.use('/product', routeProducts);
v1Route.use('/customers', routeCustomers);


export default v1Route;
