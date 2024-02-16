import "dotenv/config";

export const config = {
  OPENAI_API_KEY: process.env["OPENAI_API_KEY"],
  VERBOSE_LOGGING: process.env["VERBOSE_LOGGING"] === "true",
};