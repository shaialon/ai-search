import logger from "node-color-log";
import chalk from "chalk";

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
