//require("dotenv").config();
import dotenv from "dotenv";

dotenv.config();

export const api_key = process.env.API_KEY;
export const auth_domain = process.env.AUTH_DOMAIN;
export const project_id = process.env.PROJECT_ID;
export const storage_bucket = process.env.STORAGE_BUCKET;
export const sender_id = process.env.SENDER_ID;
export const app_id = process.env.APP_ID;
