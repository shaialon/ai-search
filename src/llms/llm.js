import { config, llmModels, LOGGER_OPTIONS } from "../config.js";
import { getFromCache, setToCache } from "../utils/cache.js";

import { openAICompletion } from "./open_ai_utils.js";

const LOG = config.VERBOSE_LOGGING;

function identifyLLMProviderByModelName(modelName) {
  if (modelName.startsWith("gpt-")) {
    return "OpenAI";
  } else if (modelName.startsWith("claude-")) {
    return "Anthropic";
  }
  return null;
}

export async function llmCompletionWithCache(payload) {
  const payloadWithModel = {
    ...payload,
    model: payload.model || config.MODEL,
  };
  let chatCompletion = await getFromCache(payloadWithModel);
  if (!chatCompletion) {
    //
    const llmProvider = identifyLLMProviderByModelName(payloadWithModel.model);
    LOG && console.log(`Making a request to ${llmProvider}: ${payloadWithModel.model}`);
    LOG && console.time("Query LLM Execution");
    chatCompletion = await openAICompletion(payloadWithModel);
    LOG && console.timeEnd("Query LLM Execution");
    setToCache(payloadWithModel, chatCompletion);
  }

  LOG && console.log(`Response from LLM:`);
  LOG && console.dir(chatCompletion, LOGGER_OPTIONS);

  return chatCompletion;
}
