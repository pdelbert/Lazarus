const jwt = require("jsonwebtoken");
import { Response, NextFunction } from "express";

export const authorization = (req:any, res:Response, next:NextFunction) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.json({ message : "no authorization"}).status(403);
    }
    
    try {
      const data = jwt.verify(token, process.env.AUTH_SECRET_KEY);
      req.user_nicename = data.user_nicename;
      req.user_email = data.user_email;
      return next();
    } catch {
        return res.json({ message : "no authorization"}).status(403);
    }
};