import { jest } from "@jest/globals";
import { processUserQuery } from "../src/index.js";

const tests = [
  {
    name: "Hebrew query",
    query: `. אח שלי - תארגן מלון באיביזה לי ולאשתי, 3 לילות מתחילת אוגוסט. אנחנו זוג צעיר ואנחנו מחפשים מלון. רוצה משהו דה-בסט מ 10 אלף שקל ללילה עד 20 אלף. אני רוצה לפנק אותה במסאאז כפרה עליה!`,
    url: `https://www.booking.com/searchresults.html?ss=Ibiza&ssne=Ibiza&ssne_untouched=Ibiza&lang=he-il&checkin=2024-08-01&checkout=2024-08-04&group_adults=2&nflt=price%3DILS-10000-20000-1%3B`,
  },
];

for (const { name, query, url } of tests) {
  test(`${name} 🔎 ${query}`, async () => {
    const data = await processUserQuery(query);
    expect(data).toBe(url);
  });
}
