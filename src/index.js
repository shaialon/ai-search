import { openAICompletionWithCache, MODELS } from "./open_ai_utils.js";
import { convertStructuredFiltersToUrl } from "./booking_utils.js";
import { logLink } from "./logger.js";
import { tests } from "../benchmark/benchmark.js";

const SYSTEM_PROMPT =
  `You translate human search queries into structured filters for Booking.com stays (hotels, homes, etc.).
Example:
I'm looking for accommodations in London for a 4-night stay starting on the 12th of February, 2024. We are a family of 2 adults, 2 kids, and a 6-months baby, and we'll be bringing our dog. Must have washer and a jacuzzi. It's critical that the booking comes with a free cancellation policy, as our plans might change. Our budget is up to 600 quid per night for each room. Must have 2 separate bedrooms... we need a crib for the baby.

Output (the comment is not part of the output, it's just for explanation purposes):
{
  // MANDATORY fields:
  "language_IETF": "en", // Realize the language of the search. Reply in IETF language tag format such as "en", "he" - without subtags.
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
  "facilities": ["Washing machine","Hot tub","Crib"], // The amenities / facilities that user EXPLICITLY asked for. Don't add things that the user didn't ask for. Best select from the list of popular facilities below.

  // Other OPTIONAL fields include if specified:
  "price_per_night": {"currency":"GBP", "lte":1200} // The price per night (if specified), supports "gte" and "lte" operators. The currency if specified. This is for all rooms in the order ( so 600x2 ).
  "rooms": 2, // The number of rooms (if specified)
  "bedrooms_min": 2, // The minimum number of bedrooms (if specified)
  "bathrooms_min": 2, // The minimum number of bathrooms (if specified)
  "pet_friendly": true, // The pet-friendly flag. The "true" value is added automatically, as the user is traveling with a dog.
  "free_cancellation": true, // If the user explicitly mentioned the free cancellation policy.
  
  "brand" // The brand of the accommodation (like "Hilton", "Marriott", "Hyatt", etc.)
  "rating" // The rating of the accommodation (supports "gte" and "lte" operators) - scale from 1 to 10
  
  "meals" // Enum (self, breakfast, breakfast_and_lunch, breakfast_and_dinner, all_inclusive)
  "property_type" // Enum (Entire homes & apartments, Apartments, Hotels, Guesthouses, Vacation Homes, Hostels, Campgrounds)
  "room_type" // Enum (single, double, twin, suite, studio, apartment, villa, chalet, bungalow, cabin, house, boat, tent, treehouse, igloo)
}

NOTES:
- If the user does not mention some parameters - do not include them in the output.
- If the question is not in English, mark so in language_IETF, and translate it to English before processing.
- Popular Facilities Include (You can still choose out of the list): "Free WiFi", "Breakfast Included", "Hotels", "Vacation Homes", "Beachfront", "Hostels", "Guesthouses", "No prepayment", "Campgrounds", "Entire homes & apartments", "Apartments", "Villas", "Non-smoking rooms", "Family rooms", "Parking", "Swimming pool", "All-inclusive", "Breakfast & lunch included", "Breakfast & dinner included", "Free cancellation", "Private bathroom", "Air conditioning", "Private pool", "Kitchen", "Balcony", "Sea view", "Kitchen", "Refrigerator", "Washing machine", "Terrace", "Upper floors accessible by elevator", "View", "Towels", "Pet friendly", "Shower", "Hot tub", "Linens", "Wonderful", "Spa", "Airport shuttle", "Facilities for disabled guests", "24-hour front desk", "Room service", "Restaurant", "Fitness center", "Electric vehicle charging station", "Family-Friendly Properties", "Bed and Breakfasts", "Homestays", "Boats", "Very Good", "Good", "Pleasant", "Guests' Favorite Area", "Bathtub", "Toilet", "Electric kettle", "TV", "Coffee/Tea maker", "Crib", "Mountain view", "Toilet paper", "Interconnecting room(s) available", "Single-room AC for guest accommodation", "Accessible by elevator", "Rooftop pool", "Soundproof", "Hairdryer", "Fitness", "Massage", "Bicycle rental", "Book without credit card", "Twin beds", "Double bed", "Wheelchair accessible", "Toilet with grab rails", "Raised toilet", "Lowered sink", "Bathroom emergency cord", "Visual aids (Braille)", "Visual aids (tactile signs)", "Auditory guidance", "Entire unit located on ground floor", "Entire unit wheelchair accessible", "Adapted bath", "Roll-in shower", "Walk-in shower", "Lower sink", "Emergency cord in bathroom", "Shower chair"
- Current date is ${new Date().toISOString().split("T")[0]}
- Always respond in Minified JSON!
`.trim();

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

processUserQuery(tests[6].query);
