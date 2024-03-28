import "dotenv/config";

export const llmModels = {
  // OpenAI
  GPT_3_5: "gpt-3.5-turbo-0125",
  GPT_4_TURBO: "gpt-4-turbo-preview",
  GPT_4: "gpt-4",
  // Anthropic
  CLAUDE_3_SONNET: "claude-3-sonnet-20240229", // Faster
  CLAUDE_3_OPUS: "claude-3-opus-20240229", // Stronger

  // Groq
  MIXTRAL: "mixtral-8x7b-32768",
  LLAMA2_70B: "llama2-70b-4096",
};

const IS_TEST = process.env.JEST_WORKER_ID !== undefined;

export const config = Object.freeze({
  OPENAI_API_KEY: process.env["OPENAI_API_KEY"],
  ANTHROPIC_API_KEY: process.env["ANTHROPIC_API_KEY"],
  GROQ_API_KEY: process.env["GROQ_API_KEY"],
  MODEL: llmModels.MIXTRAL,
  VERBOSE_LOGGING: true && !IS_TEST, // process.env["VERBOSE_LOGGING"] === "true",
  IS_TEST,
  PORT: process.env["PORT"] || 8010,
});

export const LOGGER_OPTIONS = {
  depth: null,
  colors: true,
};
