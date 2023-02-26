import quizzes from "./routes/quizzes.js";
import questions from "./routes/questions";
import express from "express";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port:: ${port}`);
});

app.use("/api/quizzes", quizzes);
api.use("/api/questions", questions);
