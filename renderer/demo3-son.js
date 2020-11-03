var popBtn = this.document.querySelector('#popBtn')
popBtn.onclick = function (e) {
  // 参数
  //  message : 传递的消息，是String类型的值
  // targetOrigin : 指定发送的窗口。 是将消息发送给指定来源的父窗口，如果未指定来源则发送给*，即所有窗口。
  window.opener.postMessage('我是子窗口的消息')
}