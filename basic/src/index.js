const config = require('config');
const App = require('@finde/nofy');

config.rootDir = __dirname;
const app = new App(config);
app.on('ready', () => {
  app.printInfo();

});
