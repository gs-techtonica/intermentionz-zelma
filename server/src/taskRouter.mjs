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
  // save the request using addTask func inside a variable called 'task'
  // add task is taking 2 parameters, the sub & name
  console.log("request.user", request.user);
  const task = await db.addTask(request.user.sub, request.body.name);
  // what I'm giving back - a status of 201 & converting the task into json
  response.status(201).json(task);
  // console.log(response.status); // response.status is func
  // why can't I console.log(response.json(task))?
});

// update task/ set default
router.patch("/:taskId", async (request, response) => {
  const taskId = parseInt(request.params.taskId);
  // console.log("request", request);
  const task = await db.updateIsDefault(taskId, request.user.sub);
  // what I'm giving back
  response.status(200).json(task);
});

// delete method
router.delete("/:deleteId", async (request, response) => {
  // you're assigning request.params.deleteId to variable
  // request.params returns an id
  // console.log("request params: ", request.params);
  const deleteId = request.params.deleteId;
  // converting the string to an int
  let strId = parseInt(deleteId);
  await db.deleteTask(strId);
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
