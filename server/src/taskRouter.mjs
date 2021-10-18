// Task Router - copy this and make affirmations router
import express from "express";

import * as db from "./db.mjs";

const router = express.Router();

// gets the Task using user.sub
router.get("/", async (request, response) => {
  const tasks = await db.getTasks(request.user.sub);
  response.json(tasks);
});
// adds new tasks
router.use(express.json());
router.post("/", async (request, response) => {
  const task = await db.addTask(request.user.sub, request.body.name);
  response.status(201).json(task);
});

export default router;
