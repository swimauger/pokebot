const { app, BrowserWindow } = require('electron');
const Database = require('./app/js/service/database.js');
let View;

function createWindow () {
    View = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    View.loadFile('app/html/setup.html');

    Database.downloadBot(app.getPath('userData')).then(() => {
        View.loadFile('app/html/app.html');
    });

    View.on('closed', () => {
        View = null;
    });

}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (View === null) {
        createWindow();
    }
});
