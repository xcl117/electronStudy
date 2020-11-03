var btn = this.document.querySelector('#btn');
const { remote } = require('electron')
const { BrowserWindow, Menu } = remote;

window.onload = function () {
  btn.onclick = function () {
    newWin = new BrowserWindow({
      width: 500,
      height: 500,
    })

    newWin.loadFile('yellow.html')
    newWin.on('close', () => {
      newWin = null;
    })
  }
}


// 右键菜单

var rigthTemplate = [
  { label: '粘贴' },
  { label: '复制' }
]
var m = Menu.buildFromTemplate(rigthTemplate)

window.addEventListener('contextmenu', function (e) {
  //阻止当前窗口默认事件
  e.preventDefault();
  //把菜单模板添加到右键菜单
  m.popup({ window: remote.getCurrentWindow() })
})







