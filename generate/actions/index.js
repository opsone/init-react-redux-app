const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const { getPaths } = require('../../utils');

const e = module.exports = {};

e.generateFiles = function(name, modelsFiles) {
  const paths = getPaths();

  fs.ensureDirSync(`${paths.actions}${name}`);
  console.log(`${chalk.green('Create')} action dir ${chalk.inverse(paths.actions+name)}`);

  for (file of modelsFiles) {
    const n = path.basename(file).replace('.js', '');

    let contents = fs.readFileSync(file).toString();
    contents = contents.replace(new RegExp('##NAME##', 'g'), name.toUpperCase());

    fs.ensureFileSync(`${paths.actions}${name}/${n}.js`);
    fs.appendFileSync(`${paths.actions}${name}/${n}.js`, contents);
    console.log(`${chalk.green('Create')} action file ${chalk.cyan(paths.actions+name+'/'+n+'.js')}`);
  }
  console.log();
};

e.generateTestsFiles = function(name, modelsFiles, modelTestFile) {
  const paths = getPaths();

  fs.ensureDirSync(`${paths.tests.actions}${name}`);
  console.log(`${chalk.green('Create')} test action dir ${chalk.inverse(paths.tests.actions+name)}`);

  for (file of modelsFiles) {
    const n = path.basename(file).replace('.js', '');

    let contents = fs.readFileSync(modelTestFile).toString();
    contents = contents.replace(new RegExp('##NAME##', 'g'), name);

    fs.ensureFileSync(`${paths.tests.actions}${name}/${n}.test.js`);
    fs.appendFileSync(`${paths.tests.actions}${name}/${n}.test.js`, contents);
    console.log(`${chalk.green('Create')} test action file ${chalk.gray(paths.tests.actions+name+'/'+n +'.test.js')}`);
  }
  console.log();
};

e.generateIndex = function(name) {
  const paths = getPaths();
  const fileName = `${paths.actions}index.js`;
  let contents = fs.readFileSync(fileName).toString();
  contents = `import * as ${name} from './${name}';
${contents.slice(0, contents.length - 1)}
export { ${name} };`;

  fs.writeFileSync(fileName, contents);
};
