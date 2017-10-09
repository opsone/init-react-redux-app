const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const { getPaths } = require('../../utils');

const e = module.exports = {};

e.generateFile = function(modelFile) {
  const paths = getPaths();

  const contents = fs.readFileSync(modelFile).toString();
  const fileName = path.basename(modelFile);

  fs.ensureFileSync(`${paths.app}${fileName}`);
  fs.appendFileSync(`${paths.app}${fileName}`, contents);
  console.log(`${chalk.green('Create')} file ${chalk.cyan(paths.app + fileName)}`);
  console.log();
};
