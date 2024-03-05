const booking_facilities = [
  {
    name: "Only show available properties",
    synonyms: [
      "show only available accommodations",
      "list only available properties",
      "display only available lodgings",
    ],
    key: "oos=1",
  },
  {
    name: "Free WiFi",
    synonyms: ["complimentary wireless internet", "free Wi-Fi access", "free internet connection"],
    key: "hotelfacility=107",
  },
  {
    name: "Breakfast Included",
    synonyms: ["complimentary breakfast", "breakfast provided", "free breakfast"],
    key: "mealplan=1",
  },
  {
    name: "Hotels",
    synonyms: ["hotel accommodations", "lodging hotels", "hotel properties"],
    key: "ht_id=204",
  },
  {
    name: "Vacation Homes",
    synonyms: ["holiday homes", "vacation properties", "holiday rentals"],
    key: "ht_id=220",
  },
  {
    name: "Beachfront",
    synonyms: ["oceanfront", "seaside location", "beachside"],
    key: "ht_beach=1",
  },
  {
    name: "Hostels",
    synonyms: ["backpacker lodgings", "youth hostels", "budget accommodations"],
    key: "ht_id=203",
  },
  {
    name: "Guesthouses",
    synonyms: ["B&Bs", "bed and breakfasts", "inn"],
    key: "ht_id=216",
  },
  {
    name: "No prepayment",
    synonyms: ["pay at stay", "no deposit required", "no upfront payment"],
    key: "fc=5",
  },
  {
    name: "Campgrounds",
    synonyms: ["camping sites", "RV parks", "campsites"],
    key: "ht_id=214",
  },
  {
    name: "Entire homes & apartments",
    synonyms: ["whole apartments", "full homes rental", "entire house"],
    key: "privacy_type=3",
  },
  {
    name: "Apartments",
    synonyms: ["apartment units", "flats", "condos"],
    key: "ht_id=201",
  },
  {
    name: "Villas",
    synonyms: ["luxury villas", "private villas", "holiday villas"],
    key: "ht_id=213",
  },
  {
    name: "Non-smoking rooms",
    synonyms: ["smoke-free rooms", "no smoking accommodations", "non-smoker rooms"],
    key: "hotelfacility=16",
  },
  {
    name: "Family rooms",
    synonyms: ["family suites", "rooms for families", "family accommodations"],
    key: "hotelfacility=28",
  },
  {
    name: "Parking",
    synonyms: ["car parking", "vehicle parking", "parking available"],
    key: "hotelfacility=2",
  },
  {
    name: "Swimming pool",
    synonyms: ["pool", "outdoor pool", "indoor pool"],
    key: "hotelfacility=433",
  },
  {
    name: "Kitchen facilities",
    synonyms: ["kitchen amenities", "cooking facilities", "kitchenette"],
    key: "mealplan=999",
  },
  {
    name: "All-inclusive",
    synonyms: ["all-inclusive rate", "everything included", "all expenses paid"],
    key: "mealplan=4",
  },
  {
    name: "Breakfast & lunch included",
    synonyms: ["half board", "breakfast and lunch provided", "morning and noon meals"],
    key: "mealplan=8",
  },
  {
    name: "Breakfast & dinner included",
    synonyms: ["full board", "breakfast and dinner provided", "morning and evening meals"],
    key: "mealplan=9",
  },
  {
    name: "Wonderful: 9+",
    synonyms: ["excellent rating: 9+", "superb: 9+", "outstanding: 9+"],
    key: "review_score=90",
  },
  {
    name: "Very Good: 8+",
    synonyms: ["great rating: 8+", "very good reviews: 8+", "highly rated: 8+"],
    key: "review_score=80",
  },
  {
    name: "Good: 7+",
    synonyms: ["good rating: 7+", "positive reviews: 7+", "favorable: 7+"],
    key: "review_score=70",
  },
  {
    name: "Pleasant: 6+",
    synonyms: ["nice rating: 6+", "pleasant reviews: 6+", "satisfactory: 6+"],
    key: "review_score=60",
  },
  {
    name: "Free cancellation",
    synonyms: ["no-cost cancellation", "complimentary cancellation", "free of charge cancellation"],
    key: "fc=2",
  },
  {
    name: "Private bathroom",
    synonyms: ["ensuite bathroom", "private washroom", "own bathroom"],
    key: "roomfacility=38",
  },
  {
    name: "Air conditioning",
    synonyms: ["AC", "aircon", "climate control"],
    key: "roomfacility=11",
  },
  {
    name: "Private pool",
    synonyms: ["personal pool", "own pool", "exclusive pool"],
    key: "roomfacility=93",
  },
  {
    name: "Kitchen/Kitchenette",
    synonyms: ["small kitchen", "kitchen facilities", "compact kitchen"],
    key: "roomfacility=999",
  },
  {
    name: "Balcony",
    synonyms: ["terrace", "patio", "deck"],
    key: "roomfacility=17",
  },
  {
    name: "Sea view",
    synonyms: ["ocean view", "beach view", "coastal view"],
    key: "roomfacility=108",
  },
  {
    name: "Kitchen",
    synonyms: ["full kitchen", "cooking area", "cookhouse"],
    key: "roomfacility=45",
  },
  {
    name: "Refrigerator",
    synonyms: ["fridge", "cooler", "icebox"],
    key: "roomfacility=22",
  },
  {
    name: "Washing machine",
    synonyms: ["laundry machine", "clothes washer", "washer"],
    key: "roomfacility=34",
  },
  {
    name: "Terrace",
    synonyms: ["patio", "balcony", "deck"],
    key: "roomfacility=123",
  },
  {
    name: "Upper floors accessible by elevator",
    synonyms: ["elevator access to upper floors", "lift access", "upper level lift access"],
    key: "roomfacility=132",
  },
  {
    name: "View",
    synonyms: ["scenery", "panorama", "outlook"],
    key: "roomfacility=81",
  },
  {
    name: "Towels",
    synonyms: ["bath towels", "hand towels", "linens"],
    key: "roomfacility=124",
  },
  {
    name: "Pet friendly",
    synonyms: ["pets allowed", "animal friendly", "dog friendly"],
    key: "hotelfacility=4",
  },
  {
    name: "Shower",
    synonyms: ["bath", "rain shower", "shower stall"],
    key: "roomfacility=4",
  },
  {
    name: "Hot tub",
    synonyms: ["jacuzzi", "whirlpool", "spa bath"],
    key: "roomfacility=14",
  },
  {
    name: "Linens",
    synonyms: ["beddings", "sheets", "bed linens"],
    key: "roomfacility=125",
  },
  {
    name: "Wonderful",
    synonyms: ["excellent", "superb", "outstanding"],
    key: "review_score=90",
  },
  {
    name: "5 stars",
    synonyms: ["5-star", "5 star", "5*"],
    key: "class=5",
  },
  {
    name: "Spa",
    synonyms: ["wellness center"],
    key: "hotelfacility=54",
  },
  {
    name: "Airport shuttle",
    synonyms: ["shuttle service", "airport transfer", "shuttle bus", "shuttle"],
    key: "hotelfacility=17",
  },
  {
    name: "Facilities for disabled guests",
    synonyms: ["handicap accessible", "disabled facilities", "accessible accommodations"],
    key: "hotelfacility=25",
  },
  {
    name: "24-hour front desk",
    synonyms: ["24/7 reception", "round-the-clock check-in", "all-day front desk"],
    key: "hotelfacility=8",
  },
  {
    name: "Room service",
    synonyms: ["in-room dining", "dining in the room", "room delivery"],
    key: "hotelfacility=5",
  },
  {
    name: "Restaurant",
    synonyms: ["dining", "eatery", "food service"],
    key: "hotelfacility=3",
  },
  {
    name: "Fitness center",
    synonyms: ["gym", "workout room", "exercise area"],
    key: "hotelfacility=11",
  },
  {
    name: "Electric vehicle charging station",
    synonyms: ["EV charging", "electric car charging", "electric vehicle charging"],
    key: "hotelfacility=182",
  },
  {
    name: "Family-Friendly Properties",
    synonyms: ["family-friendly", "kid-friendly", "child-friendly"],
    key: "family_friendly_property=1",
  },
  {
    name: "Bed and Breakfasts",
    synonyms: ["B&B", "breakfast included", "morning meal"],
    key: "ht_id=208",
  },
  {
    name: "Homestays",
    synonyms: ["home rentals", "private homes", "residential properties"],
    key: "ht_id=222",
  },
  {
    name: "Boats",
    synonyms: ["yachts", "sailboats", "watercraft"],
    key: "ht_id=215",
  },
  {
    name: "Very Good",
    synonyms: ["great", "very good", "highly rated"],
    key: "review_score=80",
  },
  {
    name: "Good",
    synonyms: ["positive", "favorable", "satisfactory"],
    key: "review_score=70",
  },
  {
    name: "Pleasant",
    synonyms: ["nice", "pleasant", "satisfactory"],
    key: "review_score=60",
  },
  {
    name: "Guests' Favorite Area",
    synonyms: ["popular area", "loved by guests", "guests' favorite"],
    key: "di=9580",
  },
  {
    name: "Bathtub",
    synonyms: ["bath", "soaking tub", "bath tub", "tub"],
    key: "roomfacility=5",
  },
  {
    name: "Toilet",
    synonyms: ["restroom", "lavatory", "commode"],
    key: "roomfacility=31",
  },
  {
    name: "Electric kettle",
    synonyms: ["tea kettle", "water boiler", "hot water pot", "kettle", "pot"],
    key: "roomfacility=86",
  },
  {
    name: "TV",
    synonyms: ["television", "flat-screen TV", "cable TV"],
    key: "roomfacility=8",
  },
  {
    name: "Coffee/Tea maker",
    synonyms: ["coffee machine", "tea maker", "coffee"],
    key: "roomfacility=998",
  },
  {
    name: "Childrens' cribs",
    synonyms: ["baby crib", "infant crib", "crib", "cot", "baby bed", "bassinet", "carrycot"],
    key: "roomfacility=175",
  },
  {
    name: "Mountain view",
    synonyms: ["hill view", "mountain scenery", "mountain outlook"],
    key: "roomfacility=112",
  },
  {
    name: "Toilet paper",
    synonyms: ["bathroom tissue", "toilet roll", "bath tissue", "TP"],
    key: "roomfacility=141",
  },
  {
    name: "Interconnecting room(s) available",
    synonyms: ["connecting rooms", "adjoining rooms", "connecting door"],
    key: "roomfacility=73",
  },
  {
    name: "Single-room AC for guest accommodation",
    synonyms: ["individual room air conditioning", "personal air conditioning", "single room AC"],
    key: "roomfacility=230",
  },
  {
    name: "Accessible by elevator",
    synonyms: ["lift accessible", "elevator access", "lift access", "elavator", "lift"],
    key: "roomfacility=189",
  },
  {
    name: "Rooftop pool",
    synonyms: ["top-floor pool", "upper-level pool", "rooftop swimming pool"],
    key: "roomfacility=157",
  },
  {
    name: "Soundproof",
    synonyms: ["noise-free", "soundproofed", "quiet"],
    key: "roomfacility=79",
  },
  {
    name: "Hairdryer",
    synonyms: ["blow dryer", "hair dryer", "hair blower", "dryer"],
    key: "roomfacility=12",
  },
  {
    name: "1 star",
    synonyms: ["1-star", "1 star", "1*"],
    key: "class=1",
  },
  {
    name: "2 stars",
    synonyms: ["2-star", "2 star", "2*"],
    key: "class=2",
  },
  {
    name: "3 stars",
    synonyms: ["3-star", "3 star", "3*"],
    key: "class=3",
  },
  {
    name: "4 stars",
    synonyms: ["4-star", "4 star", "4*"],
    key: "class=4",
  },
  {
    name: "Unrated",
    synonyms: ["no rating", "unrated", "no stars"],
    key: "class=0",
  },
  {
    name: "Fitness",
    synonyms: ["exercise", "workout", "sports"],
    key: "popular_activities=253",
  },
  {
    name: "Massage",
    synonyms: [],
    key: "popular_activities=55",
  },
  {
    name: "Bicycle rental",
    synonyms: ["bike rental", "bicycle hire", "bike hire", "bike"],
    key: "popular_activities=447",
  },
  //   {
  //     name: "Less than 1 km",
  //     key: "distance=1000",
  //   },
  //   {
  //     name: "Less than 3 km",
  //     key: "distance=3000",
  //   },
  //   {
  //     name: "Less than 5 km",
  //     key: "distance=5000",
  //   },
  {
    name: "Book without credit card",
    synonyms: ["no credit card required", "book without payment", "no card needed"],
    key: "fc=4",
  },
  {
    name: "Twin beds",
    synonyms: ["two single beds", "twin single beds", "two separate beds"],
    key: "tdb=2",
  },
  {
    name: "Double bed",
    synonyms: ["full bed", "queen bed", "king bed", "double room"],
    key: "tdb=3",
  },
  //   {
  //     name: "Arc de Triomphe",
  //     key: "popular_nearby_landmarks=936",
  //   },
  //   {
  //     name: "Louvre Museum",
  //     key: "popular_nearby_landmarks=935",
  //   },
  //   {
  //     name: "Eiffel Tower",
  //     key: "popular_nearby_landmarks=735",
  //   },
  //   {
  //     name: "Louise Michel Metro Station",
  //     key: "popular_nearby_landmarks=9781",
  //   },
  //   {
  //     name: "Saint-Mandé Metro Station",
  //     key: "popular_nearby_landmarks=9894",
  //   },
  //   {
  //     name: "Novotel",
  //     key: "chaincode=1050",
  //   },
  //   {
  //     name: "Mercure",
  //     key: "chaincode=1051",
  //   },
  //   {
  //     name: "Adagio Aparthotels",
  //     key: "chaincode=3707",
  //   },
  //   {
  //     name: "HipHop Hostels",
  //     key: "chaincode=7352",
  //   },
  //   {
  //     name: "Citadines",
  //     key: "chaincode=1585",
  //   },
  //   {
  //     name: "ibis",
  //     key: "chaincode=1053",
  //   },
  //   {
  //     name: "Astotel",
  //     key: "chaincode=1166",
  //   },
  //   {
  //     name: "ibis Budget",
  //     key: "chaincode=3186",
  //   },
  //   {
  //     name: "Relais & Châteaux",
  //     key: "chaincode=1440",
  //   },
  //   {
  //     name: "Pullman Hotels and Resorts",
  //     key: "chaincode=1854",
  //   },
  {
    name: "Wheelchair accessible",
    synonyms: ["handicap accessible", "disabled facilities", "accessible accommodations", "handicap friendly"],
    key: "accessible_facilities=185",
  },
  {
    name: "Toilet with grab rails",
    synonyms: ["grab bars", "handrails", "toilet rails"],
    key: "accessible_facilities=186",
  },
  {
    name: "Raised toilet",
    synonyms: ["high toilet", "tall toilet", "elevated toilet"],
    key: "accessible_facilities=187",
  },
  {
    name: "Lowered sink",
    synonyms: ["accessible sink", "handicap sink", "disabled sink"],
    key: "accessible_facilities=188",
  },
  {
    name: "Bathroom emergency cord",
    synonyms: ["emergency pull cord", "bathroom alarm", "safety cord"],
    key: "accessible_facilities=189",
  },
  {
    name: "Visual aids (Braille)",
    synonyms: ["Braille signs", "tactile signs", "Braille labels", "Braille"],
    key: "accessible_facilities=211",
  },
  {
    name: "Visual aids (tactile signs)",
    synonyms: ["tactile signs", "Braille labels", "tactile labels"],
    key: "accessible_facilities=212",
  },
  {
    name: "Auditory guidance",
    synonyms: ["audio guidance", "sound guidance", "auditory signs"],
    key: "accessible_facilities=213",
  },
  {
    name: "Entire unit located on ground floor",
    synonyms: ["ground floor"],
    key: "accessible_room_facilities=131",
  },
  {
    name: "Entire unit wheelchair accessible",
    synonyms: ["room wheelchair accessible"],
    key: "accessible_room_facilities=134",
  },
  {
    name: "Adapted bath",
    synonyms: ["accessible bath", "handicap bath", "disabled bath"],
    key: "accessible_room_facilities=148",
  },
  {
    name: "Roll-in shower",
    synonyms: ["accessible shower", "handicap shower", "disabled shower"],
    key: "accessible_room_facilities=149",
  },
  {
    name: "Walk-in shower",
    synonyms: ["accessible shower", "handicap shower", "disabled shower"],
    key: "accessible_room_facilities=150",
  },
  {
    name: "Lower sink",
    synonyms: ["accessible sink", "handicap sink", "disabled sink"],
    key: "accessible_room_facilities=152",
  },
  {
    name: "Emergency cord in bathroom",
    synonyms: ["bathroom alarm", "safety cord", "emergency pull cord"],
    key: "accessible_room_facilities=153",
  },
  {
    name: "Shower chair",
    synonyms: ["shower seat", "shower bench", "shower stool"],
    key: "accessible_room_facilities=154",
  },
  //   {
  //     name: "Level 3+",
  //     key: "SustainablePropertyLevelFilter=4",
  //   },
  //   {
  //     name: "Level 3 and higher",
  //     key: "SustainablePropertyLevelFilter=3",
  //   },
  //   {
  //     name: "Level 2 and higher",
  //     key: "SustainablePropertyLevelFilter=2",
  //   },
  //   {
  //     name: "Level 1 and higher",
  //     key: "SustainablePropertyLevelFilter=1",
  //   },
];

function normalizeStr(str) {
  return str.replace(/_/g, " ").toLowerCase().trim();
}

const bookingFacilitiesMap = booking_facilities.reduce((acc, facility) => {
  acc[facility.name.toLowerCase().trim()] = facility.key;
  facility.synonyms.forEach(synonym => {
    acc[normalizeStr(synonym)] = facility.key;
  });
  return acc;
});

export function getBookingFacilityByName(name) {
  return bookingFacilitiesMap[normalizeStr(name)];
}
