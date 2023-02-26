import prisma from "../config/database.js";
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Questions routes");
});

router.post("/add", async (req, res) => {
  try {
    const addQuestion = await prisma.questions.create({
      data: {
        ...req.body,
      },
    });
    return res.status(200).json(addQuestion);
  } catch (err) {
    res.status(403).send("Something went wrong");
  }
});

router.post("/delete", async (req, res) => {
  try {
    const addQuestion = await prisma.questions.create({
      data: {
        ...req.body,
      },
    });
    return res.status(200).json(addQuestion);
  } catch (err) {
    res.status(403).send("Something went wrong");
  }
});
