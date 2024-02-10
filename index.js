import "dotenv/config";
import OpenAI from "openai";

const MODELS = {
  GPT_3_5: "gpt-3.5-turbo",
  GPT_4_TURBO: "gpt-4-turbo-preview",
};

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

const SYSTEM_PROMPT =
  `You translate human search queries into structured filters for Booking.com stays (hotels, homes, etc.).
Example:
I'm looking for accommodations in London for a 4-night stay starting on the 12th of February, 2024. We are a family of 2 adults, 2 kids, and an infant, and we'll be bringing our dog. Must have washer and a jacuzzi. It's critical that the booking comes with a free cancellation policy, as our plans might change. Our budget is up to 600 quid per night.

Output:
{
    "location": "London",
    "check_in_date": "2024-02-12",
    "nights": 4,
    "guests": {
        "adults": 2,
        "kids": 2,
        "infants": 1
    },
    "amenities": ["washer", "jacuzzi"],
    "pet_friendly": true,
    "booking_policy": "free_cancellation",
    "price_per_night": {"lte":600, "currency":"GBP"}
}

NOTES:
- If the user doesn't specify a check-out date, assume a 1-night stay.
- If the user doesn't specify the number of guests, assume 1 adult.
- If the user does not mention some parameters, - do not include them in the output.
- Current date is ${new Date().toISOString().split("T")[0]}
- Always respond in JSON!
`.trim();

// const userQ = `Find a hotel in Cyprus for me and my wife, 2 nights starting 19th march. We are looking for a hotel with a pool and a gym. Our budget is 200 euros per night.`;

const userQ = `Find a place in Porto for me and my wife, 2 weeks starting 22th march.`;

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: userQ },
    ],
    model: MODELS.GPT_4_TURBO,
    response_format: { type: "json_object" },
  });
  const response = chatCompletion.choices[0].message.content;
  console.dir(JSON.parse(response), {
    depth: null,
    colors: true,
  });
}

main();
