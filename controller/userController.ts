import { Request, Response, NextFunction } from "express";
import { 
    getUser, 
    getAllUsers,
    createUser, 
    updateUser 
} from "../model/userModel";

export const getAll = async(req:Request, res:Response, next:NextFunction) => {
    return res.json(await getAllUsers());
}

export const findUser = async(req:Request, res:Response, next:NextFunction) => {
    return res.json(await getUser(req.params.id));
}

export const createNewUser = async(req:Request, res:Response, next:NextFunction) => {
    
    const requestParams = {
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        roles: req.body.roles
    }

    const paramsStringified = JSON.stringify(requestParams);
    
    return res.json(await createUser(paramsStringified));
}

export const updateExistingUser = async(req:Request, res:Response, next:NextFunction) => {
    const userId = req.params.id;

    const requestParams = {
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        roles: req.body.roles
    }

    const bodyStringified = JSON.stringify(requestParams);
    
    return res.json(await updateUser(userId, bodyStringified));
}