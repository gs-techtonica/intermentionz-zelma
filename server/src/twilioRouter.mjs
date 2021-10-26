// Router for adding a new User to the DB upon login
import express, { application } from "express";
import { Twilio } from "twilio";

import config from "./config";

const router = express.Router();

// Initialize Twilio client
const getTwilioClient = () => {
  if (
    !config.TWILIO_ACCOUNT_SID ||
    !config.TWILIO_API_KEY ||
    !config.TWILIO_API_SECRET
  ) {
    throw new Error(`Unable to initialize Twilio client`);
  }
  return new Twilio(config.TWILIO_API_KEY, config.TWILIO_API_SECRET, {
    accountSid: config.TWILIO_ACCOUNT_SID,
  });
};

export const twilioClient = getTwilioClient();
export default router;
