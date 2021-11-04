// Task Router - copy this and make affirmations router
import dotenv from "dotenv";
import express from "express";
import twilio from "twilio";

import * as db from "./db.mjs";

const router = express.Router();

// Twilio
dotenv.config();
// test comment
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
let client = twilio(accountSid, authToken);

router.use(express.json());
// gets the Task using user.sub
router.post("/", async (request, response) => {
  const phone = await db.getPhone(request.user.sub);
  console.log("user: ", request.user); // undefined?
  response.json(phone);

  let message = await db.getMessage(request.user.sub, request.body.id);
  console.log("message: ", message);

  // don't use request.message.id
  // if (request.body.id) {
  //   message = await db.getMessage(request.body.id);
  // } else {
  //   message = await db.getDefault(request.user.sub);
  // }

  await client.messages.create({
    body: message,
    from: "+12178852760",
    to: phone, // you don't have to interpolate in obj
  });
});

export default router;
