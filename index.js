const {app, BrowserWindow} = require("electron");
const path = require('path')

function creatWindow (){
    const  win = new BrowserWindow({
        width:800,
        height:480,
        backgroundColor:"white",
    })
    win.loadURL('http://localhost:3000');
}

require('electron-reload')(__dirname,{
    electron:path.join(__dirname,'node_modules','.bin','electron')
})

app.whenReady().then(creatWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });