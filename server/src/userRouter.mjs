// Router for adding a new User to the DB upon login
import express from "express";

import * as db from "./db.mjs";

const router = express.Router();

router.use(express.json());
router.post("/", async (request, response) => {
  const user = await db.addOrUpdateUser(request.body.user);
  response.status(201).json(user);
});

router.use(express.json());
router.post("/phone", async (request, response) => {
  // save the request using addPhone func inside a variable called 'phone'
  console.log("request.body: ", request.body);
  const phone = await db.addPhone(request.user.sub, request.body.phone);
  // what we're giving back - a status code & phone.json()
  response.status(201).json(phone);
});

export default router;
