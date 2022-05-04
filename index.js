const { isDevelopMode, logger } = require("./logger.js");

isDevelopMode(true);

const foo = [{ name: "foo", age: 32, active: true }];

logger(foo);
