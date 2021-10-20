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
// post had both a params & a body
// body is a separate part of the request from the URL
router.post("/", async (request, response) => {
  const task = await db.addTask(request.user.sub, request.body.name);
  // console.log("inside add method");
  response.status(201).json(task);
  // console.log("inside add func");
});

// delete method
router.delete("/:deleteId", async (request, response) => {
  console.log("inside delete");
  // you're assigning request.params.deleteId to variable
  // const deleteId = request.params.deleteId;
  await db.deleteTask(request.user.sub, request.params.deleteId);
  // if you want to use deleteId variable, you take whole express request.body.name & replace that with deleteId
  // if it was apart of request, it'd be request.deleteId, which it's not

  // const task = await db.deleteTask(request.user.sub, deleteId);

  // // delete method doesn't expect a body; instead make it apart of the URL
  // // const task = { name: "task", id: 3 };
  // console.log("inside delete method");
  response.status(201).end();
  // sometimes when you delete, you don't give an answer back
});

export default router;
