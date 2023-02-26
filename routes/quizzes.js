import prisma from "../config/database.js";
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Quiz routes");
});

router.post("/create", async (req, res) => {
  console.log(req.body);
  try {
    const createQuiz = await prisma.quizzes.create({
      data: {
        ...req.body,
      },
    });
    return res.status(200).json(createQuiz);
  } catch {
    res.status(403).send("Something went wrong");
  }
});

export default router;
