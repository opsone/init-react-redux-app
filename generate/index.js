const chalk = require('chalk');
const path = require('path');
const pluralize = require('pluralize');
const actions  = require('./actions');
const reducers = require('./reducers');
const store = require('./store');
const utils = require('./utils');
const app = require('./app');

const e = module.exports = {};

const basePath = path.dirname(__filename) + '/..';

e.createAction = function(n) {
  const name = pluralize.singular(n.toLowerCase());

  const modelsFiles = [
    `${basePath}/model/actions/create.js`,
    `${basePath}/model/actions/fetch.js`,
    `${basePath}/model/actions/index.js`,
    `${basePath}/model/actions/remove.js`,
    `${basePath}/model/actions/update.js`,
  ];

  const modelTestFile = `${basePath}/model/__tests__/action.test.js`;

    try {
      actions.generateFiles(name, modelsFiles);
      // ------ TESTS ------ //
      actions.generateTestsFiles(name, modelsFiles, modelTestFile);
      // ------ INDEX ------ //
      actions.generateIndex(name);
    } catch (err) {
      console.error(`${chalk.red(err)}`);
    }
};

e.createReducer = function(n) {
  const name = pluralize.plural(n.toLowerCase());

  const modelFile = `${basePath}/model/reducers.js`;
  const modelTestFile = `${basePath}/model/__tests__/reducer.test.js`;

    try {
      reducers.generateFiles(name, modelFile);
      // ------ TESTS ------ //
      reducers.generateTestsFiles(name, modelTestFile);
      // ------ INDEX ------ //
      reducers.generateIndex(name);

    } catch (err) {
      console.error(`${chalk.red(err)}`);
    }
};

e.createIndex = function() {
  const modelFile = `${basePath}/model/app/index.js`;

  try {
    app.updateFile(modelFile);
  } catch (err) {
    console.error(`${chalk.red(err)}`);
  }
};

e.createIndexNative= function() {
  try {
    app.updateFile(`${basePath}/model/app/App.js`);
    app.updateFile(`${basePath}/model/app/index.ios.js`);
    app.updateFile(`${basePath}/model/app/index.android.js`);
  } catch (err) {
    console.error(`${chalk.red(err)}`);
  }
};

e.createStore = function() {
  const modelFile = `${basePath}/model/store/index.js`;

  try {
    store.generateFile(modelFile);
  } catch (err) {
    console.error(`${chalk.red(err)}`);
  }
};

e.createStoreNative= function() {
  const modelFile = `${basePath}/model/store/native.js`;

  try {
    store.generateFile(modelFile);
  } catch (err) {
    console.error(`${chalk.red(err)}`);
  }
};

e.createUtils = function() {
  const modelFile = `${basePath}/model/utils.js`;

  try {
    utils.generateFile(modelFile);
  } catch (err) {
    console.error(`${chalk.red(err)}`);
  }
};
