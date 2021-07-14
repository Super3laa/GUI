const {app, BrowserWindow} = require("electron");
const path = require('path')
function creatWindow (){
    const  win = new BrowserWindow({
        width:800,
        height:480,
        backgroundColor:"white",
        webPreferences:{
            nodeIntegration:false,
            worldSafeExecuteJavaScript:true,
            contextIsolation:true
        }
    })

    win.loadFile('index.html');
}

require('electron-reload')(__dirname,{
    electron:path.join(__dirname,'node_modules','.bin','electron')
})

app.whenReady().then(creatWindow)