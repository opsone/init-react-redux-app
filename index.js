#!/usr/bin/env node
const fs = require('fs-extra');

if (!fs.existsSync('package.json')) {
  process.exit();
}

const chalk = require('chalk');
const commander = require('commander');
const spawn = require('child_process').spawn;
const writePkg = require('write-pkg');

const { shouldUseYarn, tree, isNative } = require('./utils');
const { createIndex, createIndexNative, createStore, createStoreNative, createUtils, createAction, createReducer } = require('./generate');
const packageJson = require('./package.json');

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .on('--help', () => {
    console.log(`    Commands:`);
    console.log();
    console.log(`    init [dest]`);
    console.log(`    generate [name]`);
    console.log();
  })
  .parse(process.argv);

if (program.args.length && program.args[0] === 'init')
{
  const useYarn = shouldUseYarn();
  const dependencies = ['redux', 'redux-thunk', 'redux-persist', 'react-redux', 'redux-mock-store'];
  let command, args;

  if (useYarn) {
    command = 'yarnpkg';
    args = ['add', '--exact'].concat(dependencies);
  } else {
    command = 'npm';
    args = [
      'install',
      '--save',
      '--save-exact',
      '--loglevel',
      'error',
    ].concat(dependencies);
  }

  const initReactReduxApp = spawn(command, args);

  initReactReduxApp.stdout.on('data', function (data) {
    console.log(data.toString());
  });

  initReactReduxApp.stderr.on('data', function (data) {
    console.log(data.toString());
  });

  initReactReduxApp.on('exit', function (code) {
    const pkg = JSON.parse(fs.readFileSync('./package.json'));
    if (program.args.length > 1) {
      pkg.appDir = program.args[1];
    }
    else {
      pkg.appDir = '.';
    }

    writePkg.sync(pkg);

    tree();

    if (isNative()) {
      createIndexNative();
      createStoreNative();
    }
    else {
      createIndex();
      createStore();
    }
    createUtils();
  });
}
else if (program.args.length == 2 && program.args[0] === 'generate' ) {
  createAction(program.args[1]);
  createReducer(program.args[1]);
}
