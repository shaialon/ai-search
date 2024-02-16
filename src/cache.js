// A basic cache to save LLM tokens and development sanity
import { config } from "./config.js";
import storage from "node-persist";
import crypto from "crypto";
import { logGreen } from "./logger.js";

const LOG = config.VERBOSE_LOGGING;

// Initialize the storage
await storage.init({
  dir: "open_ai_completions",
});

function generateCacheKey(input) {
  // Convert input to a string if it's an object
  let stringInput;
  if (typeof input === "object") {
    try {
      stringInput = JSON.stringify(input);
    } catch (error) {
      console.error("Failed to stringify input:", error);
      // Handle non-serializable input, fallback, or throw error
      throw new Error("Input cannot be serialized");
    }
  } else {
    stringInput = input;
  }
  return crypto.createHash("sha256").update(stringInput).digest("hex");
}

export async function getFromCache(payload) {
  const key = generateCacheKey(payload);
  const data = await storage.getItem(key); // Use the generated key to get the item
  LOG && data && logGreen("Got Cache hit!");
  return data;
}

// Implement set cache
export async function setToCache(payload, value) {
  const key = generateCacheKey(payload);
  await storage.setItem(key, value); // Save the value with the generated key
  LOG && logGreen("Saved to cache!");
}
