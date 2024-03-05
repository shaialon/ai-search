import { openAICompletionWithCache, MODELS } from "./open_ai_utils.js";
import { convertStructuredFiltersToUrl } from "./booking_utils.js";
import { logLink } from "./logger.js";
import { tests } from "./benchmark.js";

const SYSTEM_PROMPT =
  `You translate human search queries into structured filters for Booking.com stays (hotels, homes, etc.).
Example:
I'm looking for accommodations in London for a 4-night stay starting on the 12th of February, 2024. We are a family of 2 adults, 2 kids, and a 6-months baby, and we'll be bringing our dog. Must have washer and a jacuzzi. It's critical that the booking comes with a free cancellation policy, as our plans might change. Our budget is up to 600 quid per night for each room. Must have 2 separate bedrooms...

Output (the comment is not part of the output, it's just for explanation purposes):
{
  // MANDATORY fields:
  "language_IETF": "en-us", // Realize the language of the search.
  "location": "London", // The location can be a city, a region, or a neighborhood. It must be a string.
  "check_in_date": "2024-02-12", // The check-in date (if specified). MUST BE IN THE FUTURE!
  "check_out_date": "2024-02-16", // The check-out date (if specified, or caculated from the check-in date and the number of nights)
  "nights": 4, // The number of nights (if specified)
  "guests": { // The number of guests (if specified)
      "adults": 2,
      "kids": 3, // The number of kids AND infants (if specified)
      "infants": 1, // The number of infants (if specified)
      "kids_ages": [0] // The ages of the kids in YEARS (if specified)
  },
  
  // Facilities is an important catch-all for any type of additional requirement that is not captured in other fields!
  "facilities": ["washer", "jacuzzi","crib"], // The amenities / facilities. The "crib" is added automatically, as the user is traveling with an infant.

  // Other OPTIONAL fields include if specified:
  "price_per_night": {"currency":"GBP", "lte":1200} // The price per night (if specified), supports "gte" and "lte" operators. The currency if specified. This is for all rooms in the order ( so 600x2 ).
  "rooms": 2, // The number of rooms (if specified)
  "pet_friendly": true, // The pet-friendly flag. The "true" value is added automatically, as the user is traveling with a dog.
  "free_cancellation": true, // If the user explicitly mentioned the free cancellation policy.
  
  "brand" // The brand of the accommodation (like "Hilton", "Marriott", "Hyatt", etc.)
  "rating" // The rating of the accommodation (supports "gte" and "lte" operators) - scale from 1 to 10
  
  "meals" // Enum (self, breakfast, breakfast_and_lunch, breakfast_and_dinner, all_inclusive)
  "property_type" // Enum (Entire homes & apartments, Apartments, Hotels, Guesthouses, Vacation Homes, Hostels, Campgrounds)
  "room_type" // Enum (single, double, twin, suite, studio, apartment, villa, chalet, bungalow, cabin, house, boat, tent, treehouse, igloo)
}



Number fields include (supports "gte" and "lte" operators):
"beds","bedrooms","bathrooms"
"accessibility": Enum(Entire unit located on ground floor, Upper floors accessible by elevator, Entire unit wheelchair accessible, Toilet with grab rails, Adapted bath, Roll-in shower, Walk-in shower, Raised toilet, Lowered sink, Emergency cord in bathroom, Shower chair)

NOTES:
- If the user does not mention some parameters - do not include them in the output.
- If the question is not in English, mark so in language_IETF, and translate it to English before processing.
- Current date is ${new Date().toISOString().split("T")[0]}
- Always respond in Minified JSON!
`.trim();

const userQueries = [
  // `My brother in law jonathan and I want to arrange a hotel in Eilat for our families. We are 2 adults - each couple. Make sure it has a pool private to us, we are looking for a 5 night stay on the 2nd week of August. Our budget is 1500 shekels per night per room (we need two rooms).`,
  `I'm looking for accommodations in Madrid for a 4-night stay starting on the 12th of April, 2024. We are a family of 2 adults, 2 kids (8 and 6), and a 6-months baby, and we'll be bringing our dog. Must have washer and a swimmin pool. It's critical that the booking comes with a free cancellation policy, as our plans might change. Our budget is up to 4000 USD for the whole stay. Must have 2 separate bedrooms...`,
  // `Find a place in Porto for me and my wife, 2 weeks starting 22th march!!!`,
  // `Book the Savoy in London - I'm on a business trip and I need a room for 3 nights starting on the 1st of April. I need a room with a view and a bathtub. My budget is 500 pounds per night.`,
  // `ME + 4 KIDS + 2 DOGS. 3 NIGHTS IN A CABIN IN THE WOODS AT LAKE TAHO. 2 BEDROOMS, 2 BATHROOMS. 3RD WEEK OF SEPTEMBER. BUDGET: 1900 BUCKS PER NIGHT.`,
  // `Find a hotel in Larnaca or Paphos for me and my wife, 2 nights starting 19th march. We are looking for a hotel with a pool and a gym. Our budget is 200 euros per night.`,
  // `. אח שלי - תארגן מלון באיביזה לי ולאשתי, 3 לילות מתחילת אוגוסט. אנחנו זוג צעיר ואנחנו מחפשים מלון. רוצה משהו דה-בסט מ 10 אלף שקל ללילה עד 20 אלף. אני רוצה לפנק אותה במסאאז כפרה עליה!`,
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

export async function processUserQuery(userQ) {
  const start = Date.now();
  const structuredFilters = await convertUserQueryToStructuredFilters(userQ);
  const duration = Date.now() - start;
  const url = convertStructuredFiltersToUrl(structuredFilters);

  logLink(url, "🔎 " + userQ, " Open Link\n", duration);
  return url;
}

// for (const userQ of userQueries) {
//   processUserQuery(userQ);
// }

processUserQuery(tests[2].query);
