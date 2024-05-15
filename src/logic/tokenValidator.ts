import { Request, Response, NextFunction } from "express";

const jwt = require('jsonwebtoken');

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(' ')[1];

    if (token == null) return res.status(401).json({ message: "No token provided" });

    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {

        if (err) return res.status(403).json({ message: "Invalid token" });

        next();
    });
}
