// Task Router - copy this and make affirmations router
import express from "express";

import * as db from "./db.mjs";

const affirmationRouter = express.Router();

// gets the Task using user.sub
affirmationRouter.get("/", async (request, response) => {
  const affirmations = await db.getAffirmations(request.user.sub);
  response.json(affirmations);
});
// adds new tasks
affirmationRouter.use(express.json());
affirmationRouter.post("/", async (request, response) => {
  const affirmation = await db.addAffirmation(
    request.user.sub,
    request.body.name,
  );
  response.status(201).json(affirmation);
});

export default affirmationRouter;
