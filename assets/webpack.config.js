const ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require("webpack");
var path = require("path");

var env = process.env.MIX_ENV || "dev";
var isProduction = env === "prod";

// We'll set up some paths for our generated files and our development server
const staticDir = path.join(__dirname, ".");
const destDir = path.join(__dirname, "../priv/static");
const publicPath = "/";

console.log("hello webpack");
console.log(destDir);

module.exports = {
  entry: ["./js/app.js","./css/app.scss"],
  output: {
    path: destDir+"/js",
    filename: "app.js"
  },
   module: {
     loaders: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader!sass-loader!import-glob-loader",
          fallback: "style-loader"
        })
      }
     ]
   },
  plugins: [
    new ExtractTextPlugin("../css/app.css")
  ]
};

// const path = require('path');
// var webpack = require("webpack");

// const destDir = path.join(__dirname, '../priv/static');


// console.log(__dirname+"/dist");

// module.exports = {
//   entry: './js/app.js',
//   output: {
//     path: destDir,
//     filename: 'fuck.js',
//     publicPath : "/dist/"
//   }
// };