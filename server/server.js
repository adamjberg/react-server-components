const register = require("react-server-dom-webpack/node-register");
register();

const babelRegister = require("@babel/register");
const path = require("path");
const { readFileSync } = require("fs");

babelRegister({
  ignore: [/[\\\/](build|server|node_modules)[\\\/]/],
  presets: [["@babel/preset-react", { runtime: "automatic" }]],
  plugins: ["@babel/transform-modules-commonjs"],
});

const { renderToPipeableStream } = require("react-server-dom-webpack/server");
const express = require("express");

const React = require("react");
const ReactApp = require("../src/App").default;

const app = express();

app.get("/", (req, res) => {
  const html = readFileSync(
    path.resolve(__dirname, "../public/index.html"),
    "utf8"
  );
  res.send(html);
});

app.get("/react", (req, res) => {
  const manifest = readFileSync(
    path.resolve(__dirname, "../public/react-client-manifest.json"),
    "utf8"
  );
  const moduleMap = JSON.parse(manifest);
  const { pipe } = renderToPipeableStream(
    React.createElement(ReactApp),
    moduleMap
  );
  pipe(res);
});

app.use(express.static('public'));

app.listen(process.env.PORT || 3000);
