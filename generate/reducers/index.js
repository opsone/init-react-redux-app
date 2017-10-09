const chalk = require('chalk');
const fs = require('fs-extra');
const pluralize = require('pluralize');
const { getPaths } = require('../../utils');

const e = module.exports = {};

e.generateFiles = function(name, modelFile) {
  const paths = getPaths();

  let contents = fs.readFileSync(modelFile).toString();
  contents = contents.replace(new RegExp('##NAME##', 'g'), pluralize.singular(name));

  fs.ensureFileSync(`${paths.reducers}${name}.js`);
  fs.appendFileSync(`${paths.reducers}${name}.js`, contents);
  console.log(`${chalk.green('Create')} reducer file ${chalk.cyan(paths.reducers+name+'.js')}`);
  console.log();
};

e.generateTestsFiles = function(name, modelTestFile) {
  const paths = getPaths();

  let contents = fs.readFileSync(modelTestFile).toString();
  contents = contents.replace(new RegExp('##NAME##', 'g'), name);

  fs.ensureFileSync(`${paths.tests.reducers}${name}.js`);
  fs.appendFileSync(`${paths.tests.reducers}${name}.js`, contents);
  console.log(`${chalk.green('Create')} test reducer file ${chalk.gray(paths.tests.reducers+name+'.js')}`);
  console.log();
};

e.generateIndex = function(name) {
  const paths = getPaths();
  const fileName = `${paths.reducers}index.js`;
  let contents = fs.readFileSync(fileName).toString();
  contents = `import ${name} from './${name}';
${contents.slice(0, contents.length - 1)}
export { ${name} };`;

  fs.writeFileSync(fileName, contents);
};
