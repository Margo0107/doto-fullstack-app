import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

type Task = {
  id: number;
  text: string;
};

let tasks: Task[] = [{ id: 1, text: "learn js" }];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const newTask: Task = {
    id: Date.now(),
    text: req.body.text,
  };

  tasks.push(newTask);

  res.status(200).json(newTask);
});

app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  tasks = tasks.filter((tasks) => tasks.id !== id);

  res.json({ message: "task deleted" });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
