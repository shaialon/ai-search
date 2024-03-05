import chalk from "chalk";
import terminalLink from "terminal-link";
import { config } from "./config.js";
const { IS_TEST } = config;

export function logGrey(message) {
  console.log(chalk.grey(message));
}

export function logYellow(message) {
  console.log(chalk.yellow(message));
}

export function logRed(message) {
  console.log(chalk.red(message));
}

export function logGreen(message) {
  console.log(chalk.green(message));
}

export function logBlue(message) {
  console.log(chalk.blue(message));
}

export function logLink(url, anchorText, message, duration) {
  if (IS_TEST) {
    return;
  }
  logGrey("-----------");
  let text = "";
  if (duration) {
    text += chalk.green.bold(`Took (${duration.toLocaleString()} ms).`);
  }
  if (message) {
    text += chalk.blue.bold(message);
  }
  if (anchorText) {
    text += chalk.yellow(` ` + anchorText);
  }
  console.log(terminalLink(text, url));
  logGrey("-----------");
}
