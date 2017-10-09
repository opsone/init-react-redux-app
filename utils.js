const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const execSync = require('child_process').execSync;

const e = module.exports = {};

e.getPaths = function() {
  const pkg = JSON.parse(fs.readFileSync('./package.json'));
  const src = pkg.appDir ? pkg.appDir + '/' : './';

  return {
    app : `${src}`,
    actions : `${src}actions/`,
    reducers : `${src}reducers/`,
    store : `${src}store/`,
    tests : {
      base : `${src}__tests__/`,
      actions : `${src}__tests__/actions/`,
      reducers : `${src}__tests__/reducers/`,
    },
  };
};

e.shouldUseYarn = function() {
  try {
    execSync('yarnpkg --version', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
};

e.tree = function() {
  const paths = e.getPaths();
  const dirs = [
    paths.actions,
    paths.reducers,
    paths.tests.base,
    paths.tests.actions,
    paths.tests.reducers,
  ];

  for (const dir of dirs) {
    try {
      fs.ensureDirSync(dir);
      console.log(`${chalk.green('Create')} dir ${chalk.cyan(dir)}`);
    } catch (err) {
      console.error(`${chalk.red(err)}`);
    }
  }

  try {
    fs.ensureFileSync(`${dirs[0]}index.js`);
    console.log(`${chalk.green('Create')} file ${chalk.cyan(dirs[0] + 'index.js')}`);
    fs.ensureFileSync(`${dirs[1]}index.js`);
    console.log(`${chalk.green('Create')} file ${chalk.cyan(dirs[1] + 'index.js')}`);
    console.log();
  } catch (err) {
    console.error(`${chalk.red(err)}`);
  }
};

e.isNative = function() {
  try {
    const data = fs.readFileSync('./package.json');

    if(data.indexOf('react-native') >= 0){
      return true;
    }
    else {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
};
