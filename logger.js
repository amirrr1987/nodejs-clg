import { fileURLToPath, URL } from "url";
import path from 'path'
import chalk from 'chalk';

const currentPath = fileURLToPath(new URL(import.meta.url))
const fileName = path.basename(currentPath)

const logger = (data) => {
  console.log(chalk.magentaBright("--------------------- Start log ------------------------------"));
  console.log(chalk.cyanBright(`- File name is: `), chalk.redBright(fileName))
  console.log(chalk.cyanBright(`- File location is: `), chalk.redBright(currentPath))
  console.log(chalk.cyanBright(`- Type is : `), chalk.redBright(typeof data))
  console.log(chalk.cyanBright(`- Is this an Array?`), chalk.redBright(Array.isArray(data) ? true : false))
  if (Array.isArray(data) === true) {
    console.log(chalk.cyanBright(`- Array Length: `), chalk.redBright(data.length))
  }
  console.log(chalk.cyanBright(`- Data return  : `))
  console.dir(data);
  console.log(chalk.magentaBright("---------------------  End log  ------------------------------"));
}

export default logger