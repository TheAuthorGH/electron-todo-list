const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
  const window = new BrowserWindow({width: 1000, height: 800});
  window.loadFile('index.html');
  window.setMenu(null);
});