import "dotenv/config";
import OpenAI from "openai";

export const MODELS = {
  GPT_3_5: "gpt-3.5-turbo",
  GPT_4_TURBO: "gpt-4-turbo-preview",
};

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

const LOGGER_OPTIONS = {
  depth: null,
  colors: true,
};

export async function openAICompletionWithCache(payload) {
  console.log(`Making a request to OpenAI: ${payload.model}`);
  console.time("Execution");
  const chatCompletion = await openai.chat.completions.create(payload);
  const response = chatCompletion.choices[0].message.content;
  console.timeEnd("Execution");

  console.log("Response from OpenAI:");
  console.dir(chatCompletion.usage, LOGGER_OPTIONS);
  console.dir(JSON.parse(response), LOGGER_OPTIONS);

  return response;
}
