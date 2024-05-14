// Import express
import express, { Request, Response } from "express";
const router = express.Router();

// Import Prisma Client
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Get all books
router.get("/", async (req: Request, res: Response) => {
  const books = await prisma.book.findMany();
  res.json(books);
});

// Get a book by id
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const book = await prisma.book.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  res.json(book);
});

// Create a book
router.post("/", async (req: Request, res: Response) => {
  const { book } = req.body;
  res.json(book);
});

// Export the router
module.exports = router;
