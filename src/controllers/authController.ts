// Import express and init the router
import express, { Request, Response } from "express";
const router = express.Router();

// Import JWT
import jwt from 'jsonwebtoken';

// Generate a token for the user
router.post("/login", async (req: Request, res: Response) => {
    const { password } = req.body;

    if (password !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({ message: "Invalid password" });
    }

    // Ensure token secret is set
    if (!process.env.TOKEN_SECRET) {
        return res.status(500).json({ message: "Token secret is not set" });
    }

    let token = jwt.sign({ sub: "admin" }, process.env.TOKEN_SECRET, { expiresIn: '1h' });

    res.json({ token: token });
});

// Export the router
module.exports = router;
