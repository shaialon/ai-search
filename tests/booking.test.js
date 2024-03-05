import { jest } from "@jest/globals";
import chalk from "chalk";
import terminalLink from "terminal-link";
import { processUserQuery } from "../src/index.js";
const TEST_TIMEOUT = 30000;

const tests = [
  {
    name: "Broad query - 2 rooms",
    query: `My brother in law jonathan and I want to arrange a hotel in Eilat for our families. We are 2 adults - each couple. Make sure it has a pool, we are looking for a 5 night stay on the 2nd week of August. Our budget is 1500 shekels per night per room (we need two rooms).`,
    url: `https://www.booking.com/searchresults.html?ss=Eilat&ssne=Eilat&ssne_untouched=Eilat&lang=en-us&checkin=2024-08-05&checkout=2024-08-10&group_adults=4&no_rooms=2&nflt=price%3DILS-min-1500-1%3B`,
  },
  {
    name: "Hebrew query",
    query: `. אח שלי - תארגן מלון באיביזה לי ולאשתי, 3 לילות מתחילת אוגוסט. אנחנו זוג צעיר ואנחנו מחפשים מלון. רוצה משהו דה-בסט מ 10 אלף שקל ללילה עד 20 אלף. אני רוצה לפנק אותה במסאאז כפרה עליה!`,
    url: `https://www.booking.com/searchresults.html?ss=Ibiza&ssne=Ibiza&ssne_untouched=Ibiza&lang=he-il&checkin=2024-08-01&checkout=2024-08-04&group_adults=2&nflt=price%3DILS-10000-20000-1%3B`,
  },
];

for (const { name, query, url } of tests) {
  test.concurrent(
    `${chalk.underline.black.bold.bgYellowBright(
      name
    )} 🔎 ${query} ${terminalLink(chalk.blue.bold("Open Expected Link"), url)}`,
    async () => {
      const data = await processUserQuery(query);
      expect(data).toBe(url);
    },
    TEST_TIMEOUT
  );
}

