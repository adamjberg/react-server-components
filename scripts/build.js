const path = require("path");

const webpack = require("webpack");
const ReactServerWebpackPlugin = require("react-server-dom-webpack/plugin");

webpack({
  entry: [path.resolve(__dirname, "../src/index.js")],
  output: {
    path: path.resolve(__dirname, "../public"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new ReactServerWebpackPlugin({ isServer: false })],
});
