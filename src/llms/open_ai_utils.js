import { config } from "../config.js";
import OpenAI from "openai";
import { getFromCache, setToCache } from "../utils/cache.js";

const LOG = config.VERBOSE_LOGGING;

export const MODELS = {
  GPT_3_5: "gpt-3.5-turbo-0125",
  GPT_4_TURBO: "gpt-4-turbo-preview",
  GPT_4: "gpt-4",
};

const openai = new OpenAI({
  apiKey: config.OPENAI_API_KEY,
});

const LOGGER_OPTIONS = {
  depth: null,
  colors: true,
};

export async function openAICompletionWithCache(payload) {
  let chatCompletion = await getFromCache(payload);
  if (!chatCompletion) {
    LOG && console.log(`Making a request to OpenAI: ${payload.model}`);
    LOG && console.time("Query LLM Execution");
    chatCompletion = await openai.chat.completions.create(payload);
    LOG && console.timeEnd("Query LLM Execution");
    setToCache(payload, chatCompletion);
  }

  LOG && console.dir(chatCompletion.usage, LOGGER_OPTIONS);

  const structuredResponse = JSON.parse(chatCompletion.choices[0].message.content);
  LOG && console.log("Response from OpenAI:");

  LOG && console.dir(structuredResponse, LOGGER_OPTIONS);

  return structuredResponse;
}
