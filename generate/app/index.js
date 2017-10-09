const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const { getPaths } = require('../../utils');

const e = module.exports = {};

e.updateFile = function(modelFile) {
  const paths = getPaths();
  const fileName = path.basename(modelFile);

  if (fs.existsSync(`${paths.app}${fileName}`)){
    const pkg = JSON.parse(fs.readFileSync('./package.json'));
    let contents = fs.readFileSync(modelFile).toString();
    contents = contents.replace(new RegExp('##NAME##', 'g'), pkg.name);

    fs.ensureFileSync(`${paths.app}${fileName}`);
    fs.writeFileSync(`${paths.app}${fileName}`, contents);
    console.log(`${chalk.red('Update')} file ${chalk.cyan(paths.app + fileName)}`);
    console.log();
  }
};
