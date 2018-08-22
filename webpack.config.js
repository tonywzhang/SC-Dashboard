const path = require('path');
var webpack = require("webpack");


module.exports = {
  entry: './lib/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'lib')
  },
  resolve: {
    extensions: [".js", "*"]
  }
};
