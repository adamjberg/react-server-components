const path = require("path");

const webpack = require("webpack");
const ReactServerWebpackPlugin = require("react-server-dom-webpack/plugin");

webpack(
  {
    mode: "development",
    devtool: "cheap-module-source-map",
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
  },
  (err, stats) => {
    if (err) {
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      process.exit(1);
      return;
    }
    const info = stats.toJson();
    if (stats.hasErrors()) {
      console.log("Finished running webpack with errors.");
      info.errors.forEach((e) => console.error(e));
      process.exit(1);
    } else {
      console.log("Finished running webpack.");
    }
  }
);
