const { dialog } = require('electron').remote
var openBtn = document.getElementById('openBtn');
openBtn.onclick = function () {
  // title ： String(可选) ，对话框的标题
  // defaultPath ： String(可选), 默认打开的路径
  // buttonLabel ： String(可选), 确认按钮的自定义标签，当为空时，将使用默认标签
  // filters ： 文件选择过滤器，定义后可以对文件扩展名进行筛选
  // properties：打开文件的属性，比如打开文件还是打开文件夹，甚至是隐藏文件。
  dialog.showOpenDialog({
    title: '请选择你喜欢的小姐姐照片',
    defaultPath: 'xiaojiejie.jpg',
    buttonLabel: '打开图片',
    filters: [
      { name: 'jpg', extensions: ['jpg', 'PNG'] }
    ]
  }).then(result => {
    console.log(result)
    let image = document.getElementById('images')
    image.setAttribute("src", result.filePaths[0]);
  }).catch(err => {
    console.log(err)
  })
}


const fs = require('fs')
var saveBtn = document.getElementById('saveBtn')
saveBtn.onclick = function () {
  dialog.showSaveDialog({
    title: '保存文件',
  }).then(result => {
    console.log(result)
    fs.writeFileSync(result.filePath, '技术胖一个前端爱好者')
  }).catch(err => {
    console.log(err)
  })
}


var messageBtn = document.getElementById('messageBtn')
messageBtn.onclick = function () {
  dialog.showMessageBox({
    type: 'warning',
    title: '去不去由你',
    message: '是不是要跟胖哥去红袖招?',
    buttons: ['我要去', '不去了']
  }).then(result => {
    console.log(result)
  })
}