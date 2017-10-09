const chalk = require('chalk');
const fs = require('fs-extra');
const { getPaths } = require('../../utils');

const e = module.exports = {};
const paths = getPaths();

e.generateFile = function(modelFile) {
  const paths = getPaths();

  fs.ensureDirSync(paths.store);
  console.log(`${chalk.green('Create')} dir ${chalk.cyan(paths.store)}`);

  const contents = fs.readFileSync(modelFile).toString();

  fs.ensureFileSync(`${paths.store}index.js`);
  fs.appendFileSync(`${paths.store}index.js`, contents);
  console.log(`${chalk.green('Create')} file ${chalk.cyan(paths.store + 'index.js')}`);
  console.log();
};
