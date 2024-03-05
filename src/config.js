import "dotenv/config";

const IS_TEST = process.env.JEST_WORKER_ID !== undefined;

export const config = Object.freeze({
  OPENAI_API_KEY: process.env["OPENAI_API_KEY"],
  VERBOSE_LOGGING: true && !IS_TEST, // process.env["VERBOSE_LOGGING"] === "true",
  IS_TEST,
  PORT: process.env["PORT"] || 8010,
});
