// Import express
import express, { Request, Response } from "express";
const router = express.Router();

// Import Prisma Client
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Import token validator
import { authenticateToken } from "../logic/tokenValidator";

// Get all books
router.get("/", async (req: Request, res: Response) => {
  const books = await prisma.book.findMany();
  res.json(books);
});

// Get a book by id
router.get("/:id([0-9]+)", async (req: Request, res: Response) => {
  const { id } = req.params;
  const book = await prisma.book.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  res.json(book);
});

// Create a book
router.post("/", authenticateToken, async (req: Request, res: Response) => {
  const { book } = req.body;
  res.json(book);
});

// Delete a book by id
router.delete("/:id([0-9]+)", authenticateToken, async (req: Request, res: Response) => {
  const { id } = req.params;
  const book = await prisma.book.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.json(book);
});

// Get all series
router.get("/series", async (req: Request, res: Response) => {
  const series = await prisma.bookSeries.findMany();
  res.json(series);
});

// Get a series by id
router.get("/series/:id([0-9]+)", async (req: Request, res: Response) => {
  const { id } = req.params;
  const series = await prisma.bookSeries.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  res.json(series);
});

// Get all books in a series
router.get("/series/:id([0-9]+)/books", async (req: Request, res: Response) => {
  const { id } = req.params;
  const books = await prisma.book.findMany({
    where: {
      seriesId: parseInt(id),
    },
  });
  res.json(books);
});

// Create a series
router.post(
  "/series",
  authenticateToken,
  async (req: Request, res: Response) => {
    const { series } = req.body;
    res.json(series);
  }
);

// Delete a series by id
router.delete(
  "/series/:id([0-9]+)",
  authenticateToken,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const series = await prisma.bookSeries.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json(series);
  }
);

// Export the router
module.exports = router;
