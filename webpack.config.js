// const declaration creates a read-only reference to a value
// it does not mean the value it holds is immutable, just that the variable cannot be reassigned
const webpack = require('webpack');
const fs      = require('fs');
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;

const getConfig = require('hjs-webpack');

// Create a few variables to help optimize configuration when we start modifying
const root      = resolve(__dirname);
const src       = join(root, 'src');
const modules   = join(root, 'node_modules');
const dest      = join(root, 'dist');

// create isDev variable
const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';

// the `hjs-webpack` package exports a single function that accepts a single argument
// an object that defines some simple configuration to define a required webpack configuration

var config = getConfig({
  // in - single entry file
  in: join(__dirname, 'src/app.js'),
  // out - the path the a directory to generate files
  out: join(__dirname, 'dist'),
  // fresh dist folder everytime
  clearBeforeBuild: true
})

// export the configuration object
// otherwise webpack won't have access to the `config` variable
module.exports = config;
