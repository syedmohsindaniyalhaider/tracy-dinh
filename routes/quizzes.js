import prisma from "../config/database.js";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let exceptionPattern;
    const allQuizzesWithQuestions = await prisma.quizzes.findMany({
      include: {
        questions: true,
      },
    });
    exceptionPattern = {
      success: true,
      errors: null,
      data: allQuizzesWithQuestions,
    };
    return res.status(200).json(exceptionPattern);
  } catch (err) {
    exceptionPattern = {
      success: false,
      errors: err,
      data: null,
    };
    res.status(403).send(exceptionPattern);
  }
});

router.post("/create", async (req, res) => {
  try {
    let exceptionPattern;
    const { quizTitle, quizDescription } = req.body;
    const createQuiz = await prisma.quizzes.create({
      data: {
        quizTitle: quizTitle,
        quizDescription: quizDescription,
      },
    });
    exceptionPattern = {
      success: true,
      errors: null,
      data: createQuiz,
    };
    return res.status(200).json(pattern);
  } catch (err) {
    exceptionPattern = {
      success: false,
      errors: err,
      data: null,
    };
    res.status(403).send(pattern);
  }
});

export default router;
