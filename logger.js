import { fileURLToPath, URL } from "url";
import path from 'path'
import chalk from 'chalk';

const currentPath = fileURLToPath(new URL(import.meta.url))
const fileName = path.basename(currentPath)

const logger = (data) => {
  console.log(chalk.blue("--------------------- Start log ------------------------------"));
  console.log(chalk.blue(`- File name is: `), chalk.red(fileName))
  console.log(chalk.blue(`- File location is: `), chalk.red(currentPath))
  console.log(chalk.blue(`- Type is : `), chalk.red(typeof data))
  console.log(chalk.blue(`- Is this an Array?`), chalk.red(Array.isArray(data) ? true : false))
  if (Array.isArray(data) === true) {
    console.log(chalk.blue(`- Array Length: `), chalk.red(data.length))
  }
  console.log(chalk.blue(`- Data return  : `))
  console.dir(data);
  console.log(chalk.blue("---------------------  End log  ------------------------------"));
}

export default logger