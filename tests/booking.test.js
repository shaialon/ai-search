import { jest } from "@jest/globals";
import chalk from "chalk";
import terminalLink from "terminal-link";
import { processUserQuery } from "../src/booking/booking_prompts.js";
import { tests } from "../benchmark/benchmark.js";
const TEST_TIMEOUT = 30000;

for (const { name, query, url } of tests) {
  test.concurrent(
    `${chalk.underline.black.bold.bgYellowBright(name)} 🔎 ${query} ${terminalLink(
      chalk.blue.bold("Open Expected Link"),
      url,
    )}`,
    async () => {
      const data = await processUserQuery(query);
      expect(data).toBe(url);
    },
    TEST_TIMEOUT,
  );
}
