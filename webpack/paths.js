'use strict';

const fs = require('fs');

const root = fs.realpathSync(`${__dirname}/..`); // resolve any symlinks etc.

const rootUrl = '';
const urlPath = '/';

const src = `${root}/src`;
const dist = `${root}/dist${urlPath}`;

const webpack = `${root}/webpack`;
const modules = `${root}/node_modules`;
const appModules = `${root}/packages`;

const entryFile = `${src}/index.ts`;

const packageJson = `${root}/package.json`;
const env = `${root}/.env`;
const envRef = `${root}/.env.ref`;

const records = `${webpack}/info/records.json`;
const webpackStats = `${webpack}/info/webpack-stats.json`;

const output = {
  js: '[name].js',
  jsChunks: '[name].js',
  devJs: '[name].js',
  devJsChunks: '[name].js',
};

module.exports = {
  rootUrl,
  urlPath,
  root,
  modules,
  appModules,
  src,
  dist,
  entryFile,
  packageJson,
  output,
  records,
  webpackStats,
  env,
  envRef,
};
