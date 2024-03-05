const booking_facilities = [
  {
    name: "Only show available properties",
    key: "oos=1",
  },
  {
    name: "Free WiFi",
    key: "hotelfacility=107",
  },
  {
    name: "Breakfast Included",
    key: "mealplan=1",
  },
  {
    name: "Hotels",
    key: "ht_id=204",
  },
  {
    name: "Vacation Homes",
    key: "ht_id=220",
  },
  {
    name: "Beachfront",
    key: "ht_beach=1",
  },
  {
    name: "Hostels",
    key: "ht_id=203",
  },
  {
    name: "Guesthouses",
    key: "ht_id=216",
  },
  {
    name: "No prepayment",
    key: "fc=5",
  },
  {
    name: "Campgrounds",
    key: "ht_id=214",
  },
  {
    name: "Entire homes & apartments",
    key: "privacy_type=3",
  },
  {
    name: "Apartments",
    key: "ht_id=201",
  },
  {
    name: "Hotels",
    key: "ht_id=204",
  },
  {
    name: "Villas",
    key: "ht_id=213",
  },
  {
    name: "Guesthouses",
    key: "ht_id=216",
  },
  {
    name: "Free WiFi",
    key: "hotelfacility=107",
  },
  {
    name: "Non-smoking rooms",
    key: "hotelfacility=16",
  },
  {
    name: "Family rooms",
    key: "hotelfacility=28",
  },
  {
    name: "Parking",
    key: "hotelfacility=2",
  },
  {
    name: "Swimming pool",
    key: "hotelfacility=433",
  },
  {
    name: "Kitchen facilities",
    key: "mealplan=999",
  },
  {
    name: "Breakfast Included",
    key: "mealplan=1",
  },
  {
    name: "All-inclusive",
    key: "mealplan=4",
  },
  {
    name: "Breakfast & lunch included",
    key: "mealplan=8",
  },
  {
    name: "Breakfast & dinner included",
    key: "mealplan=9",
  },
  {
    name: "Wonderful: 9+",
    key: "review_score=90",
  },
  {
    name: "Very Good: 8+",
    key: "review_score=80",
  },
  {
    name: "Good: 7+",
    key: "review_score=70",
  },
  {
    name: "Pleasant: 6+",
    key: "review_score=60",
  },
  {
    name: "Free cancellation",
    key: "fc=2",
  },
  {
    name: "No prepayment",
    key: "fc=5",
  },
  {
    name: "Private bathroom",
    key: "roomfacility=38",
  },
  {
    name: "Air conditioning",
    key: "roomfacility=11",
  },
  {
    name: "Private pool",
    key: "roomfacility=93",
  },
  {
    name: "Kitchen/Kitchenette",
    key: "roomfacility=999",
  },
  {
    name: "Balcony",
    key: "roomfacility=17",
  },
  {
    name: "Sea view",
    key: "roomfacility=108",
  },
  {
    name: "Kitchen",
    key: "roomfacility=45",
  },
  {
    name: "Refrigerator",
    key: "roomfacility=22",
  },
  {
    name: "Washing machine",
    key: "roomfacility=34",
  },
  {
    name: "Terrace",
    key: "roomfacility=123",
  },
  {
    name: "Upper floors accessible by elevator",
    key: "roomfacility=132",
  },
  {
    name: "View",
    key: "roomfacility=81",
  },
  {
    name: "Towels",
    key: "roomfacility=124",
  },
  {
    name: "Pet friendly",
    key: "hotelfacility=4",
  },
  {
    name: "Shower",
    key: "roomfacility=4",
  },
  {
    name: "Hot tub",
    key: "roomfacility=14",
  },
  {
    name: "Linens",
    key: "roomfacility=125",
  },
  {
    name: "Barbecue",
    key: "roomfacility=99",
  },
  {
    name: "Toilet",
    key: "roomfacility=31",
  },
  {
    name: "Coffee/Tea maker",
    key: "roomfacility=998",
  },
  {
    name: "Electric kettle",
    key: "roomfacility=86",
  },
  {
    name: "Safe",
    key: "roomfacility=6",
  },
  {
    name: "Pool with a view",
    key: "roomfacility=159",
  },
  {
    name: "TV",
    key: "roomfacility=8",
  },
  {
    name: "Single-room AC for guest accommodation",
    key: "roomfacility=230",
  },
  {
    name: "Toilet paper",
    key: "roomfacility=141",
  },
  {
    name: "Guests' Favorite Area",
    key: "di=9958",
  },
  {
    name: "Less than 1 km",
    key: "distance=1000",
  },
  {
    name: "Less than 3 km",
    key: "distance=3000",
  },
  {
    name: "Less than 5 km",
    key: "distance=5000",
  },
  {
    name: "3 stars",
    key: "class=3",
  },
  {
    name: "4 stars",
    key: "class=4",
  },
  {
    name: "5 stars",
    key: "class=5",
  },
  {
    name: "Unrated",
    key: "class=0",
  },
  {
    name: "Beachfront",
    key: "ht_beach=1",
  },
  {
    name: "Twin beds",
    key: "tdb=2",
  },
  {
    name: "Double bed",
    key: "tdb=3",
  },
  {
    name: "Eilat Promenade",
    key: "popular_nearby_landmarks=19838",
  },
  {
    name: "Beach",
    key: "popular_activities=302",
  },
  {
    name: "Diving",
    key: "popular_activities=82",
  },
  {
    name: "Snorkeling",
    key: "popular_activities=90",
  },
  {
    name: "Fitness center",
    key: "popular_activities=11",
  },
  {
    name: "Hot tub/Jacuzzi",
    key: "popular_activities=63",
  },
  {
    name: "All Deals",
    key: "any_deal=7",
  },
  {
    name: "Isrotel Hotels & Resorts",
    key: "chaincode=2239",
  },
  {
    name: "Dan Hotels & Resort",
    key: "chaincode=2399",
  },
  {
    name: "Brown Hotels",
    key: "chaincode=9364",
  },
  {
    name: "Atlas Hotels",
    key: "chaincode=2201",
  },
  {
    name: "Prima Hotels Israel",
    key: "chaincode=2203",
  },
  {
    name: "ISRAEL CANADA HOTELS",
    key: "chaincode=13783",
  },
  {
    name: "Level 3 and higher",
    key: "SustainablePropertyLevelFilter=3",
  },
  {
    name: "Level 2 and higher",
    key: "SustainablePropertyLevelFilter=2",
  },
  {
    name: "Level 1 and higher",
    key: "SustainablePropertyLevelFilter=1",
  },
  {
    name: "Wheelchair accessible",
    key: "accessible_facilities=185",
  },
  {
    name: "Toilet with grab rails",
    key: "accessible_facilities=186",
  },
  {
    name: "Raised toilet",
    key: "accessible_facilities=187",
  },
  {
    name: "Lowered sink",
    key: "accessible_facilities=188",
  },
  {
    name: "Bathroom emergency cord",
    key: "accessible_facilities=189",
  },
  {
    name: "Visual aids (Braille)",
    key: "accessible_facilities=211",
  },
  {
    name: "Visual aids (tactile signs)",
    key: "accessible_facilities=212",
  },
  {
    name: "Auditory guidance",
    key: "accessible_facilities=213",
  },
  {
    name: "Entire unit located on ground floor",
    key: "accessible_room_facilities=131",
  },
  {
    name: "Upper floors accessible by elevator",
    key: "accessible_room_facilities=132",
  },
  {
    name: "Entire unit wheelchair accessible",
    key: "accessible_room_facilities=134",
  },
  {
    name: "Toilet with grab rails",
    key: "accessible_room_facilities=147",
  },
  {
    name: "Adapted bath",
    key: "accessible_room_facilities=148",
  },
  {
    name: "Roll-in shower",
    key: "accessible_room_facilities=149",
  },
  {
    name: "Walk-in shower",
    key: "accessible_room_facilities=150",
  },
  {
    name: "Raised toilet",
    key: "accessible_room_facilities=151",
  },
  {
    name: "Lower sink",
    key: "accessible_room_facilities=152",
  },
  {
    name: "Shower chair",
    key: "accessible_room_facilities=154",
  },
];

const bookingFacilitiesMap = booking_facilities.reduce((acc, facility) => {
  acc[facility.name.toLowerCase().trim()] = facility.key;
  return acc;
});

export function getBookingFacilityByName(name) {
  return bookingFacilitiesMap[name.toLowerCase().trim()];
}
