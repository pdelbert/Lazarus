import express from "express";
import { 
    createCustomer, 
    deleteCustomersById, 
    findCustomerById, 
    getAllCustomers, 
    updateCustomerById } from "../../controller/customersController";

const usersRoute = express.Router();

usersRoute.get('/', getAllCustomers);
usersRoute.post('/', createCustomer);
usersRoute.get('/:id', findCustomerById);
usersRoute.post('/:id', updateCustomerById);
usersRoute.delete('/:id', deleteCustomersById);


export default usersRoute;
