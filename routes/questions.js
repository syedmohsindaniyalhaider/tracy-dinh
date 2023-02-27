import prisma from "../config/database.js";
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Questions routes");
});

router.post("/add", async (req, res) => {
  try {
    let exceptionPattern;
    const { quizId, question, correctAnswer, options, mandatory } = req.body;
    const addQuestion = await prisma.questions.create({
      data: {
        quizId: quizId,
        question: question,
        correctAnswer: correctAnswer,
        options: options,
        mandatory: mandatory,
      },
    });
    exceptionPattern = {
      success: true,
      errors: null,
      data: addQuestion,
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

router.delete("/delete", async (req, res) => {
  try {
    let exceptionPattern;
    const { questionId } = req.body;
    console.log(questionId);
    const deleteQuestion = await prisma.questions.delete({
      where: {
        questionId: questionId,
      },
    });
    exceptionPattern = {
      success: true,
      errors: null,
      data: deleteQuestion,
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

export default router;
