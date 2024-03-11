import { config, llmModels, LOGGER_OPTIONS } from "../config.js";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: config.ANTHROPIC_API_KEY,
});

const LOG = config.VERBOSE_LOGGING;

const ANTHROPIC_DEFAULTS = {
  model: llmModels.CLAUDE_3_SONNET,
  // response_format: { type: "json_object" },
  temperature: 0,
  max_tokens: 1000,
};

function convertOpenAIPayloadToAnthropic(payload) {
  // if the first message is a system message, remove it from the messages array, and add it as a key "system" in the payload
  if (payload.messages[0].role === "system") {
    payload.system = payload.messages.shift().content;
  }
  return payload;
}

// I provided the below function since Clause seems to be weak at adhering to the system message format. Example: System of "You tell jokes", User of "Tell about tomatoes" - will not provide a joke!
function condenseSystemMessageIntoUser(payload) {
  // if the first message is a system message, remove it from the messages array, and add it as a key "system" in the payload
  if (payload.messages[0].role === "system") {
    const systemText = payload.messages.shift().content;
    payload.messages[0].content = `${systemText}\n${payload.messages[0].content}`;
  }
  return payload;
}

export async function anthropicCompletion(payload) {
  const anthropicPayload = convertOpenAIPayloadToAnthropic({
    ...ANTHROPIC_DEFAULTS,
    ...payload,
  });
  const chatCompletion = await anthropic.messages.create(anthropicPayload);

  LOG && console.dir(chatCompletion.usage, LOGGER_OPTIONS);

  const structuredResponse = JSON.parse(chatCompletion.content[0].text);

  return structuredResponse;
}
