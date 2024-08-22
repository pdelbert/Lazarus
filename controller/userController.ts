const jwt = require("jsonwebtoken");

import { Request, Response, NextFunction } from "express";
import { 
    getUser, 
    getAllUsers,
    createUser, 
    updateUser, 
    setloginUser
} from "../model/userModel";

export const loginUser = async(req:Request, res:Response, next:NextFunction) => {
    const requestParams = {
        username: req.body.username,
        password: req.body.password,
    }
    const response = await setloginUser(JSON.stringify(requestParams));

    if (response['user_nicename']  && response['user_email']) {
        const token = jwt.sign({ 
            user_nicename: response['user_nicename'], 
            user_email: response['user_email'] }, 
            process.env.AUTH_SECRET_KEY
        );

        return res
            .cookie("access_token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
            })
            .status(200)
            .json({
                user_email: response['user_email'],
                user_nickname: response['user_nicename'],
                user_display_name: response['user_display_name']
            });
    }

    return res.status(403).json(response)
}

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