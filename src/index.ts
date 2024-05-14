
// Import express and dotenv

import express, { Express } from "express";
import dotenv from "dotenv";

// Require the controllers

const bookController = require("./controllers/bookController");

// Initialize express and dotenv

dotenv.config();

export const app: Express = express();
const port = process.env.PORT ?? 3000;

// Use the controllers

app.use("/books", bookController);

// Start the app

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
