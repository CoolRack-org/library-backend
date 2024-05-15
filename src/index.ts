
// Import express and dotenv

import express, { Express } from "express";
import dotenv from "dotenv";

// Import body-parser
import bodyParser from 'body-parser';

// Require the controllers

const bookController = require("./controllers/bookController");
const authController = require("./controllers/authController");

// Initialize express and dotenv

dotenv.config();

export const app: Express = express();
const port = process.env.PORT ?? 3000;

// Middleware
app.use(bodyParser.json());

// Use the controllers

app.use("/books", bookController);
app.use("/auth", authController);

// Start the app

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
