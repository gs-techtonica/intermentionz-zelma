// Router for adding a new User to the DB upon login
import express from "express";

import * as db from "./db.mjs";

const router = express.Router();

router.use(express.json());
router.post("/", async (request, response) => {
  const user = await db.addOrUpdateUser(request.body.user);
  response.status(201).json(user);
});

export default router;
