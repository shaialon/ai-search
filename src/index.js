import { openAICompletionWithCache, MODELS } from "./open_ai_utils.js";
import { convertStructuredFiltersToUrl } from "./booking_utils.js";
import { logGrey, logYellow, logBlue } from "./logger.js";

const SYSTEM_PROMPT =
  `You translate human search queries into structured filters for Booking.com stays (hotels, homes, etc.).
Example:
I'm looking for accommodations in London for a 4-night stay starting on the 12th of February, 2024. We are a family of 2 adults, 2 kids, and a 6-months baby, and we'll be bringing our dog. Must have washer and a jacuzzi. It's critical that the booking comes with a free cancellation policy, as our plans might change. Our budget is up to 600 quid per night. Must have 2 separate bedrooms...

Output (the comment is not part of the output, it's just for explanation purposes):
{
    "location": "London", // The location can be a city, a region, or a neighborhood, and can include a specific name (like "Hilton London Paddington" or "Eiffel Tower"). It must be a string.
    "check_in_date": "2024-02-12", // The check-in date (if specified)
    "check_out_date": "2024-02-16", // The check-out date (if specified, or caculated from the check-in date and the number of nights)
    "nights": 4, // The number of nights (if specified)
    "guests": { // The number of guests (if specified)
        "adults": 2,
        "kids": 3, // The number of kids AND infants(if specified)
        "infants": 1, // The number of infants (if specified)
        "kids_ages": [0] // The ages of the kids in YEARS (if specified)
    },
    "rooms": 2, // The number of rooms (if specified)
    "amenities": ["washer", "jacuzzi","crib"], // The amenities (if specified). The "crib" is added automatically, as the user is traveling with an infant.
    "pet_friendly": true, // The pet-friendly flag (if specified). The "true" value is added automatically, as the user is traveling with a dog.
    "booking_policy": "free_cancellation", // The booking policy (if specified)
    "price_per_night": {"currency":"GBP", "lte":600} // The price per night (if specified), supports "gte" and "lte" operators. The currency if specified.
}

Other fields include (if specified):
"brand" // The brand of the accommodation
"property_type" // The type of the accommodation
"rating" // The rating of the accommodation (supports "gte" and "lte" operators) - scale from 1 to 10
"meals" // Enum (self, breakfast, breakfast_and_lunch, breakfast_and_dinner, all_inclusive)
"room_type" // Enum (single, double, twin, suite, studio, apartment, villa, chalet, bungalow, cabin, house, boat, tent, treehouse, igloo)

Number fields include (supports "gte" and "lte" operators):
"beds","bedrooms","bathrooms"
"accessibility": Enum(Entire unit located on ground floor, Upper floors accessible by elevator, Entire unit wheelchair accessible, Toilet with grab rails, Adapted bath, Roll-in shower, Walk-in shower, Raised toilet, Lowered sink, Emergency cord in bathroom, Shower chair)

NOTES:
- If the user does not mention some parameters, - do not include them in the output.
- If the question is not in English, translate it to English before processing.
- Current date is ${new Date().toISOString().split("T")[0]}
- Always respond in Minified JSON!
`.trim();

// const userQ = `Find a hotel in Larnaca or Paphos for me and my wife, 2 nights starting 19th march. We are looking for a hotel with a pool and a gym. Our budget is 200 euros per night.`;
// const userQ = `. אח שלי - תארגן מלון באיביזה לי ולאשתי, 3 לילות מתחילת אוגוסט. אנחנו זוג צעיר ואנחנו מחפשים מלון. התקציב שלנו הוא 300 שקל ללילה. אני רוצה לפנק אותה במסאאז כפרה עליה!`;
// const userQ = `ME + 4 KIDS + 2 DOGS. 3 NIGHTS IN A CABIN IN THE WOODS AT LAKE TAHO. 2 BEDROOMS, 2 BATHROOMS. 2ND WEEK OF AUGUST. BUDGET: 1900 BUCKS PER NIGHT.`;
// const userQ = `Find a place in Porto for me and my wife, 2 weeks starting 22th march.`;
// const userQ = `My brother in law jonathan and I want to arrange a hotel in Eilat for our families. We are 2 adults - each couple. Make sure it has a pool, we are looking for a 5 night stay on the 2nd week of August. Our budget is 1500 shekels per night.`;

const userQueries = [
  // `My brother in law jonathan and I want to arrange a hotel in Eilat for our families. We are 2 adults - each couple. Make sure it has a pool, we are looking for a 5 night stay on the 2nd week of August. Our budget is 1500 shekels per night per room (we need to rooms).`,
  `I'm looking for accommodations in London for a 4-night stay starting on the 12th of April, 2024. We are a family of 2 adults, 2 kids (8 and 6), and a 6-months baby, and we'll be bringing our dog. Must have washer and a jacuzzi. It's critical that the booking comes with a free cancellation policy, as our plans might change. Our budget is up to 4000 USD for the whole stay. Must have 2 separate bedrooms...`,
];
async function convertUserQueryToStructuredFilters(userQ) {
  const payload = {
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: userQ },
    ],
    // model: MODELS.GPT_3_5,
    model: MODELS.GPT_4_TURBO,
    response_format: { type: "json_object" },
  };
  return await openAICompletionWithCache(payload);
}

async function processUserQuery(userQ) {
  const structuredFilters = await convertUserQueryToStructuredFilters(userQ);
  const url = convertStructuredFiltersToUrl(structuredFilters);
  logGrey("-----------");
  logYellow(userQ);
  logBlue(url);
  logGrey("-----------");
}

for (const userQ of userQueries) {
  processUserQuery(userQ);
}
