// const { fileURLToPath, URL } = require("url");
// const path = require("path");
const chalk = require("chalk");

// const currentPath = fileURLToPath(new URL(import.meta.url))
// const fileName = path.basename(currentPath)

let status;

let isDevelopMode = (value) => {
  status = value;
};


const logger = (data) => {

  if (status) {
    console.log(" ");
    console.log(
      chalk.yellowBright(
        "--------------------- Start log ------------------------------"
      )
    );
    console.log(
      chalk.magentaBright(
        " "
      )
    );
    // consoleLog(chalk.cyanBright(`- File name is: `), chalk.redBright(fileName))
    // consoleLog(chalk.cyanBright(`- File location is: `), chalk.redBright(currentPath))
    console.log(chalk.cyanBright(`- Type is: `), chalk.redBright(typeof data));
    console.log(
      chalk.cyanBright(`- Is this an Array?`),
      chalk.redBright(Array.isArray(data) ? 'Yes' : 'No')
    );
    if (Array.isArray(data) === true) {
      console.log(
        chalk.cyanBright(`- Array Length: `),
        chalk.redBright(data.length)
      );
    }
    console.log(chalk.cyanBright(`- Data return: `));
    console.dir(data);

    console.log(chalk.magentaBright(" "));
    console.log(
      chalk.yellowBright(
        "---------------------  End log  ------------------------------"
      )
    );
    console.log(" ");
  }
  else {
    console.log((" "));
    console.log(chalk.redBright("Sorry we are in production mode.."));
    console.log(" ");
  }
};

module.exports.isDevelopMode = isDevelopMode;
module.exports.logger = logger;
