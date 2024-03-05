export const tests = [
  {
    name: "Very simple",
    query: `I need 2 nights in Paris. 1 Adult. from 14-06-2024 to 16-06-2024.`,
    url: `https://www.booking.com/searchresults.html?ss=Paris&ssne=Paris&ssne_untouched=Paris&lang=en&checkin=2024-06-14&checkout=2024-06-16&group_adults=1&nflt=`,
  },
  {
    name: "Simple + Kids + Feature",
    query: `I need 7 nights in Lisbon. 2 Adults, 2 kids ages: 8, 10. from 14-07-2024. With Pool.`,
    url: `https://www.booking.com/searchresults.html?ss=Lisbon&ssne=Lisbon&ssne_untouched=Lisbon&lang=en&checkin=2024-07-14&checkout=2024-07-21&group_adults=2&group_children=2&age=8&age=10&nflt=hotelfacility%3D433`,
  },
  {
    name: "Broad query - 2 rooms, with private pool",
    query: `My brother in law jonathan and I want to arrange a hotel in Eilat for our families. We are 2 adults - each couple. Make sure it has a pool private to us, we are looking for a 5 night stay on the 2nd week of August. Our budget is 1500 shekels per night per room (we need two rooms).`,
    url: `https://www.booking.com/searchresults.html?ss=Eilat&ssne=Eilat&ssne_untouched=Eilat&lang=en&checkin=2024-08-05&checkout=2024-08-10&group_adults=4&no_rooms=2&selected_currency=ILS&nflt=price%3DILS-min-3000-1%3B%3Broomfacility%3D93`,
  },
  {
    name: "Advanced Query - Vague facilities, free cancellation, pet friendly - WITH BASSINET",
    query: `I'm looking for accommodations in Madrid for a 4-night stay starting on the 12th of April, 2024. We are a family of 2 adults, 2 kids (8 and 6), and a 6-months baby (we'll need a bassinet), and we'll be bringing our dog. Must have washer and a swimmin pool. It's critical that the booking comes with a free cancellation policy, as our plans might change. Our budget is up to 4000 Euro for the whole stay. Must have 2 separate bedrooms... `,
    url: `https://www.booking.com/searchresults.html?ss=Madrid&ssne=Madrid&ssne_untouched=Madrid&lang=en&checkin=2024-04-12&checkout=2024-04-16&group_adults=2&group_children=3&age=8&age=6&age=0&no_rooms=2&selected_currency=EUR&nflt=price%3DEUR-min-1000-1%3B%3Broomfacility%3D34%3Bhotelfacility%3D433%3Broomfacility%3D175%3Bhotelfacility%3D4%3Bfc%3D2%3Bentire_place_bedroom_count%3D2`,
  },
  //   {
  //     name: "Advanced Query - Vague facilities, free cancellation, pet friendly",
  //     query: `I'm looking for accommodations in Madrid for a 4-night stay starting on the 12th of April, 2024. We are a family of 2 adults, 2 kids (8 and 6), and a 6-months baby, and we'll be bringing our dog. Must have washer and a swimmin pool. It's critical that the booking comes with a free cancellation policy, as our plans might change. Our budget is up to 4000 Euro for the whole stay. Must have 2 separate bedrooms... `,
  //     url: `https://www.booking.com/searchresults.html?ss=Madrid&ssne=Madrid&ssne_untouched=Madrid&lang=en&checkin=2024-04-12&checkout=2024-04-16&group_adults=2&group_children=3&age=8&age=6&age=0&no_rooms=2&selected_currency=EUR&nflt=price%3DEUR-min-1000-1%3B%3Broomfacility%3D34%3Bhotelfacility%3D433%3Bhotelfacility%3D4%3Bfc%3D2%3Bentire_place_bedroom_count%3D2`,
  //   },
  {
    name: "ALL CAPS! Bedroooms, bathrooms, budget",
    query: `ME + 4 KIDS + 2 DOGS. 3 NIGHTS AT LAKE TAHO. 2 BEDROOMS, 2 BATHROOMS. 3RD WEEK OF SEPTEMBER. BUDGET: 900 BUCKS PER NIGHT.`,
    url: `https://www.booking.com/searchresults.html?ss=Lake+Tahoe&ssne=Lake+Tahoe&ssne_untouched=Lake+Tahoe&lang=en&checkin=2024-09-16&checkout=2024-09-19&group_adults=1&group_children=4&no_rooms=2&selected_currency=USD&nflt=price%3DUSD-min-900-1%3B%3Bhotelfacility%3D4%3Bentire_place_bedroom_count%3D2%3Bmin_bathrooms%3D2`,
  },
  {
    name: "Hebrew query - very vague",
    query: `. אח שלי גי-בוט , תארגן מלון באיביזה לי ולאשתי, שלוש לילות מתחילת אוגוסט. אנחנו זוג צעיר ואנחנו מחפשים מלון. רוצה משהו דה-בסט מ 10 אלף שקל ללילה עד 20 אלף. חשוב! בא לי לפנק אותה במסאז' כפרה עליה!`,
    url: `https://www.booking.com/searchresults.html?ss=Ibiza&ssne=Ibiza&ssne_untouched=Ibiza&lang=he&checkin=2024-08-01&checkout=2024-08-04&group_adults=2&selected_currency=ILS&nflt=price%3DILS-10000-20000-1%3B%3Bpopular_activities%3D55`,
  },
  {
    name: "Barcelona - with location, Desk, Coffee, Kids ages",
    query: `We want two nights in Fort Pienc Barcelona on the 20th of this month - coming with 2 kids (ages 5 and 9), so I need 2 bedrooms. I must have my morning coffee - so make sure there is a machine there. Our flight lands at 2 am, so make sure there is 24 hours reception!`,
    url: `https://www.booking.com/searchresults.html?ss=Fort+Pienc%2C+Barcelona&ssne=Fort+Pienc%2C+Barcelona&ssne_untouched=Fort+Pienc%2C+Barcelona&lang=en&checkin=2024-03-20&checkout=2024-03-22&group_adults=1&group_children=2&age=5&age=9&nflt=roomfacility%3D998%3Bhotelfacility%3D8%3Bentire_place_bedroom_count%3D2`,
  },
];
