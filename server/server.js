const register = require('react-server-dom-webpack/node-register');
register();
const {renderToPipeableStream} = require('react-server-dom-webpack/server');
const express = require('express');

const app = express();

app.get("/", () => {
  const manifest = readFileSync(
    path.resolve(__dirname, '../build/react-client-manifest.json'),
    'utf8'
  );
  const moduleMap = JSON.parse(manifest);
  const {pipe} = renderToPipeableStream(
    React.createElement(ReactApp, props),
    moduleMap
  );
  pipe(res);
})

app.listen(process.env.PORT || 3000);