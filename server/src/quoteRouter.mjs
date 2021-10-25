// Router for adding a new User to the DB upon login
import express from "express";
import fetch from "node-fetch";

// import * as db from "./db.mjs";

const router = express.Router();

router.get("/quote", async (request, response) =>
  response.json(await fetch("https://www.affirmations.dev/")),
);

// router.use(express.json());
// router.post("/", async (request, response) => {
//   const user = await db.addOrUpdateUser(request.body.user);
//   response.status(201).json(user);
// });

export default router;
