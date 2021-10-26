// Router for adding a new User to the DB upon login
import express from "express";
import fetch from "node-fetch";

// import * as db from "./db.mjs";

const router = express.Router();

router.get("/", async (request, response) => {
  response.json(await fetch("https://www.affirmations.dev/"));
  console.log(response);
});

export default router;
