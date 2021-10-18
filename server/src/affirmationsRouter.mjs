// Affirmations Router
import express from "express";

import * as db from "./db.mjs";

const router = express.Router();

// gets the Task using user.sub
router.get("/", async (request, response) => {
  const affirmations = await db.getAffirmations(request.user.sub);
  response.json(affirmations);
});
// adds new affirmation
router.use(express.json());
router.post("/", async (request, response) => {
  const affirmation = await db.addAffirmation(
    request.user.sub,
    request.body.name,
  );
  response.status(201).json(affirmation);
});

export default router;
