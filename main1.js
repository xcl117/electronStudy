// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      enableRemoteModule: true, //渲染进程可以使用require('electron').remote的remote进程
      nodeIntegration: true, // 渲染进程可以使用require加载模块
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  //Menu属于是主线程下的模块，所以只能在主线程中使用
  require('./main/menu.js') 

  // and load the index.html of the app.
  // mainWindow.loadFile('demo2.html')
  // mainWindow.loadFile('demo4.html')
  // mainWindow.loadFile('demo4.html')
  // mainWindow.loadFile('demo5.html')
  mainWindow.loadFile('demo7.html')

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.



