import { Request, Response, NextFunction } from "express";
import {  
    addCustomers,
    searchCustomerById,
    findAllCustomers,
    removeCustomersById,
    changeCustomersById
} from "../model/customersModel";


export const createCustomer = async(req:Request, res:Response, next:NextFunction) => {
    const bodyStringified = JSON.stringify(req.body);
    return res.json(await addCustomers(bodyStringified));
}

export const findCustomerById = async(req:Request, res:Response, next:NextFunction) => {
    const productId = req.params.id;
    return res.json(await searchCustomerById(productId));
}

export const getAllCustomers = async(req:Request, res:Response, next:NextFunction) => {
    return res.json(await findAllCustomers());
}

export const updateCustomerById = async(req:Request, res:Response, next:NextFunction) => {
    const productId = req.params.id;
    const bodyStringified = JSON.stringify(req.body);
    return res.json(await changeCustomersById(productId, bodyStringified));
}

export const deleteCustomersById = async(req:Request, res:Response, next:NextFunction) => {
    const productId = req.params.id;
    return res.json(await removeCustomersById(productId));
}
