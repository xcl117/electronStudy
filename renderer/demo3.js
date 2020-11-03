var { shell } = require('electron')

var aHref = document.querySelector('#aHref')

aHref.onclick = function (e) {
  e.preventDefault()
  var href = this.getAttribute('href')
  shell.openExternal(href)
}


var mybtn = document.querySelector('#mybtn')

mybtn.onclick = function (e) {
  // 通常把window.open打开的窗口叫做子窗口
  window.open('./demo3-son.html')
}

var mytext = document.querySelector('#mytext')
window.addEventListener('message', (msg) => {
  console.log(msg);
  const { data } = msg;
  mytext.innerHTML = JSON.stringify(msg)
})