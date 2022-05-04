const { fileURLToPath, URL } = require("url");
const path = require("path");
const chalk = require("chalk");



// const currentPath = fileURLToPath(import.meta.url);


// const currentPath = fileURLToPath(new URL(import.meta.url))
// const fileName = path.basename(currentPath)

let status;

let mode = (value) => {
  status = value;
};

consoleLog = (...values) => {
  if (status == "dev") {
    console.log(...values);
  } else {
    console.log(chalk.magentaBright("Sorry we are in production mode.."));
  }
};
consoleDir = (...values) => {
  if (status == "dev") {
    console.dir(...values);
  } else {
    console.log(chalk.magentaBright("Sorry we are in production mode.."));
  }
};

const logger = (data) => {

  consoleLog(chalk.magentaBright(" "));
  consoleLog(
    chalk.magentaBright(
      "--------------------- Start log ------------------------------"
    )
  );
  consoleLog(
    chalk.magentaBright(
      " "
    )
  );
  // consoleLog(chalk.cyanBright(`- File name is: `), chalk.redBright(fileName))
  // consoleLog(chalk.cyanBright(`- File location is: `), chalk.redBright(currentPath))
  consoleLog(chalk.cyanBright(`- Type is: `), chalk.redBright(typeof data));
  consoleLog(
    chalk.cyanBright(`- Is this an Array?`),
    chalk.redBright(Array.isArray(data) ? 'Yes' : 'No')
  );
  if (Array.isArray(data) === true) {
    consoleLog(
      chalk.cyanBright(`- Array Length: `),
      chalk.redBright(data.length)
    );
  }
  consoleLog(chalk.cyanBright(`- Data return: `));
  consoleDir(data);

  consoleLog(chalk.magentaBright(" "));
  consoleLog(
    chalk.magentaBright(
      "---------------------  End log  ------------------------------"
    )
  );

  consoleLog(chalk.magentaBright(" "));
};

module.exports.mode = mode;
module.exports.logger = logger;
