const {app, BrowserWindow} = require("electron");
const path = require('path')
function creatWindow (){
    const  win = new BrowserWindow({
        width:800,
        height:480,
        backgroundColor:"white",
    })
    win.loadURL('http://localhost:3000');
   //win.loadURL(`file://${path.join(__dirname, '/build/index.html')}`)
    //win.webContents.openDevTools();

}

require('electron-reload')(__dirname,{
    electron:path.join(__dirname,'node_modules','.bin','electron')
})

app.whenReady().then(creatWindow)