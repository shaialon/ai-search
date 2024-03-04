import chalk from "chalk";
import terminalLink from "terminal-link";

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

export function logLink(url, anchorText, message = "") {
  console.log(
    terminalLink(chalk.yellow(anchorText) + chalk.blue.bold(message), url)
  );
}
