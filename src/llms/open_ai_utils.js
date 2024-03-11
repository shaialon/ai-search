import { config, llmModels, LOGGER_OPTIONS } from "../config.js";
import OpenAI from "openai";
import { getFromCache, setToCache } from "../utils/cache.js";

const openai = new OpenAI({
  apiKey: config.OPENAI_API_KEY,
});

const LOG = config.VERBOSE_LOGGING;

const OPENAI_DEFAULTS = {
  model: llmModels.GPT_4_TURBO,
  response_format: { type: "json_object" },
  temperature: 0,
  seed: 100,
};
export async function openAICompletion(payload) {
  const chatCompletion = await openai.chat.completions.create({
    ...OPENAI_DEFAULTS,
    ...payload,
  });

  LOG && console.dir(chatCompletion.usage, LOGGER_OPTIONS);

  const structuredResponse = JSON.parse(chatCompletion.choices[0].message.content);

  return structuredResponse;
}
