const { fileURLToPath, URL } = require("url");
const path = require('path');
const chalk = require('chalk');

const currentPath = fileURLToPath(new URL(import.meta.url))
const fileName = path.basename(currentPath)

export const status = 'development';


consoleLog = (...values) => {
  if (status === "development") {
    console.log(...values);
  } else {
    console.log(chalk.magentaBright("Sorry we are in production mode.."));
  }
};
consoleDir = (...values) => {
  if (status === "development") {
    console.dir(...values);
  } else {
    console.log(chalk.magentaBright("Sorry we are in production mode.."));
  }
};


export const logger = (data) => {
  consoleLog(chalk.magentaBright("--------------------- Start log ------------------------------"));
  consoleLog(chalk.cyanBright(`- File name is: `), chalk.redBright(fileName))
  consoleLog(chalk.cyanBright(`- File location is: `), chalk.redBright(currentPath))
  consoleLog(chalk.cyanBright(`- Type is : `), chalk.redBright(typeof data))
  consoleLog(chalk.cyanBright(`- Is this an Array?`), chalk.redBright(Array.isArray(data) ? true : false))
  if (Array.isArray(data) === true) {
    consoleLog(chalk.cyanBright(`- Array Length: `), chalk.redBright(data.length))
  }
  consoleLog(chalk.cyanBright(`- Data return  : `))
  consoleDir(data);
  consoleLog(chalk.magentaBright("---------------------  End log  ------------------------------"));
}
