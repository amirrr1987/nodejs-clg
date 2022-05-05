const { isDevelopMode, logger } = require("./logger");

let foo = [{ a: 1, name: 34 }, { a: 2 }, { a: 3 }, { a: 4 }];


isDevelopMode(true)


it('console.log the "foo"', () => {
  expect(logger(foo))
});
