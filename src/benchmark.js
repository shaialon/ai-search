export const tests = [
  {
    name: "Broad query - 2 rooms, with private pool",
    query: `My brother in law jonathan and I want to arrange a hotel in Eilat for our families. We are 2 adults - each couple. Make sure it has a pool private to us, we are looking for a 5 night stay on the 2nd week of August. Our budget is 1500 shekels per night per room (we need two rooms).`,
    url: `https://www.booking.com/searchresults.html?ss=Eilat&ssne=Eilat&ssne_untouched=Eilat&lang=en-us&checkin=2024-08-05&checkout=2024-08-10&group_adults=4&no_rooms=2&nflt=price%3DILS-min-3000-1%3B%3Broomfacility%3D93`,
  },
  {
    name: "Vague facilities, free cancellation, pet friendly",
    query: `I'm looking for accommodations in Madrid for a 4-night stay starting on the 12th of April, 2024. We are a family of 2 adults, 2 kids (8 and 6), and a 6-months baby, and we'll be bringing our dog. Must have washer and a swimmin pool. It's critical that the booking comes with a free cancellation policy, as our plans might change. Our budget is up to 4000 USD for the whole stay. Must have 2 separate bedrooms...`,
    url: `https://www.booking.com/searchresults.html?ss=Madrid&ssne=Madrid&ssne_untouched=Madrid&lang=en-us&checkin=2024-04-12&checkout=2024-04-16&group_adults=2&group_children=3&age=8&age=6&age=0&no_rooms=2&nflt=price%3DUSD-min-1000-1%3B%3Broomfacility%3D34%3Bhotelfacility%3D433%3Broomfacility%3D175%3Bhotelfacility%3D4%3Bfc%3D2`,
  },
  {
    name: "Hebrew query- very vague",
    query: `. אח שלי גי-בוט , תארגן מלון באיביזה לי ולאשתי, שלוש לילות מתחילת אוגוסט. אנחנו זוג צעיר ואנחנו מחפשים מלון. רוצה משהו דה-בסט מ 10 אלף שקל ללילה עד 20 אלף. חשוב! בא לי לפנק אותה במסאז' כפרה עליה!`,
    url: `https://www.booking.com/searchresults.html?ss=Ibiza&ssne=Ibiza&ssne_untouched=Ibiza&lang=he-il&checkin=2024-08-01&checkout=2024-08-04&group_adults=2&nflt=price%3DILS-10000-20000-1%3B%3Bpopular_activities%3D55`,
  },
];
