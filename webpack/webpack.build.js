'use strict';

const webpack = require('webpack');

const paths = require('./paths');
const nodeLibsBrowser = require('./node-libs-browser');
const globalObject = require('webpack-global-object-x');

const tsconfig = process.env.BUILD_TYPE === 'node' ? 'tsconfig.node.json' : 'tsconfig.json';

// -----------------------------Rules-------------------------------------------
const rules = [{
  oneOf: [{
    test: /\.ts?$/,
    loader: 'awesome-typescript-loader',
    options: {
      configFileName: tsconfig,
    },
  }],
}];

// ----------------------------Plugins------------------------------------------
const plugins = [
  new webpack.IgnorePlugin(/^\.\/locale$/, /\/moment$/),
  new webpack.IgnorePlugin(/^\.\/languages$/, /\/numbro$/),
];

// ------------------------- Production config ---------------------------------
module.exports = (env, argv) => {
  const isDevMode = argv.mode === 'development';

  return {
    mode: argv.mode,
    entry: {
      'index': paths.entryFile,
    },
    context: paths.root,
    resolve: {
      modules: ['node_modules', paths.appModules],
      extensions: ['.ts', '.js', '.json'],
    },
    bail: true,
    devtool: isDevMode ? 'eval-source-map' : false,
    output: {
      path: paths.dist,
      filename: 'index.js',
      library: 'apiServices',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      globalObject: '(' + globalObject.toString() + '())',
    },
    module: {
      wrappedContextCritical: true,
      strictExportPresence: true,
      rules,
    },
    plugins,
    performance: {
      hints: false,
    },
    optimization: {
      noEmitOnErrors: true,
      namedChunks: true,
    },
    recordsPath: paths.records,
    stats: {
      modules: false,
    },
    node: nodeLibsBrowser,
  }
};
