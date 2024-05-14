import { Request, Response } from "express";

import { book } from "../models/book";

const express = require("express");
const router = express.Router();

// Define routes

router.get("/", (req: Request, res: Response) => {
  const newBook: book = {
    id: "1",
    author: "",
    torrentHash: "",
    publicationDate: new Date(),
    pages: 0,
    title: "",
    description: "",
    sinopsis: "",
  };

  res.send(newBook);
});

module.exports = router;
