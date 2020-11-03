// Modules to control application life and create native browser window
const { app, BrowserWindow, BrowserView, globalShortcut } = require('electron')
const path = require('path')

// 全屏显示
function createWindow1() {
  let size = require('electron').screen.getPrimaryDisplay().workAreaSize
  let width = parseInt(size.width)
  console.log(width)
  if (width >= 1920) {
    // 全屏显示
    mainWindow = new BrowserWindow({
      fullscreenable: true,
      fullscreen: true,
      autoHideMenuBar: true
    })
  } else {
    let height = parseInt(1080 * size.width / 1920 + 30)
    mainWindow = new BrowserWindow({
      width: width,
      height: height,
      fullscreenable: false,
      fullscreen: true,
      autoHideMenuBar: true
    })
  }

  // 注册的都是全局的快捷键
  globalShortcut.register('ctrl+e', () => {
    mainWindow.loadURL('https://jspang.com')
  })

  //检测全局快捷键是否注册成功
  let isRegister = globalShortcut.isRegistered('ctrl+e') ? 'Register Success' : 'Register fail'
  console.log('------->' + isRegister)

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.loadURL('http://localhost:20081/home')

  // var view = new BrowserView()   //new出对象
  // mainWindow.setBrowserView(view)   // 在主窗口中设置view可用
  // view.setBounds({ x: 0, y: 0, width: 1900, height: 1500 })  //定义view的具体样式和位置
  // // view.webContents.loadURL('https://jspang.com')  //wiew载入的页面

  // view.webContents.loadURL('http://localhost:20081/home')  //wiew载入的页面

}


function createWindow2() {
  const mainWindow = new BrowserWindow(
    {
      width: 1900,
      height: 1500,
      webPreferences: {
        enableRemoteModule: true, //渲染进程可以使用require('electron').remote的remote进程
        nodeIntegration: true, // 渲染进程可以使用require加载模块
        preload: path.join(__dirname, 'preload.js')
      }
    }
  )
  // mainWindow.loadURL('http://localhost:20081/home')
  var view = new BrowserView()   //new出对象
  mainWindow.setBrowserView(view)   // 在主窗口中设置view可用
  view.setBounds({ x: 0, y: 0, width: 1900, height: 1500 })  //定义view的具体样式和位置
  view.webContents.loadURL('https://jspang.com')  //wiew载入的页面

  view.webContents.loadURL('http://localhost:20081/home')  //wiew载入的页面
}

app.whenReady().then(() => {
  createWindow1()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


app.on('will-quit',function(){
  //注销全局快捷键的监听
  globalShortcut.unregister('ctrl+e')
  globalShortcut.unregisterAll()
})



