var list = [{
    "text": "微信小程序底层实现原理",
    "type": "title"
  },
  {
    "text": "一. wa的运行环境",
    "type": "h"
  },
  {
    "text": "根据微信官方的说明，wa的运行环境有3个平台，IOS的webkit（苹果开源的浏览器内核），Android的X5(QQ浏览器内核)，开发时用的nw.js（C++实现的web转桌面应用）；",
    "type": "p"
  },
  {
    "text": "二. 为什么wa不直接运行在浏览器（webview）中，而要绕过浏览器直接调用内核呢？",
    "type": "h"
  },
  {
    "text": "因为运行在浏览器中的webapp是做不了监控的，而wa的表现是半native app，半web app，而native app与web app和一个很重要的区别就是native app有自己的生命周期，在这之中，我们可以根据生命周期的不同时间段做出不同的调整，比如常驻内存，防止被系统杀掉，系统后台保存活度等等，而web app就没有这回事了，仅仅能够根据事件做出不同的调整，跟原生app比起来，体验就差了一些。基于此，wa当然不会像web app一样了，他需要有自己的生命周期。",
    "type": "p"
  },
  {
    "text": "本质上来说，wa还是运行在浏览器模式中，而承载wa的系统就是微信，用微信来管理wa的生命周期。而微信，现在本身就是一个系统。 ",
    "type": "p"
  },
  {
    "text": "微信官方贴出来的生命周期函数主要有以下3个：onLaunch（初始化完成），onShow（启动时，后由后台进入前台），onHide（由前台进入后台）",
    "type": "p"
  },
  {
    "text": "三. wa的本质是什么",
    "type": "h"
  },
  {
    "text": "wa的本质就是富单页面web应用。首先，一个wa应用程序就是一个单页面应用，所有的页面渲染和事件处理，都在一个页面内进行，但与传统的webapp不同的是，它也可以做得很丰富，就像native app一样，可以调用原生的各种接口，像网络状态、罗盘，重力，拨打电话。",
    "type": "p"
  },
  {
    "text": "四. wa的wxml, wxss与html, css之间的关系",
    "type": "h"
  },
  {
    "text": "理解了wa的本质，基本上就应该比较清楚的wxml, wxss与html, css之间的关系了。很明显，wxml就是wa的模板语言，在正式部署的时候，会转化成HTML语言，而wxss则会转化为css； ",
    "type": "p"
  },
  {
    "text": "那他们又是怎么转化的呢？wxml转化为html用的是reactjs，包括里面整套的逻辑都是建构在reactjs之上的；而wxss与css基本上没有任何不同，除了wa使用的长度单位是rpx之外。",
    "type": "p"
  },
  {
    "text": "加个题外话：微信官方定义的手机整个宽度是750rpx，但我觉得定位375rpx似乎更为恰当（理由与本主题无关，略）。",
    "type": "p"
  },
  {
    "text": "五. 小程序的生命周期与调用系统的api是如何实现的",
    "type": "h"
  },
  {
    "text": " 这个就得依赖WeixinJSBridge.js这个脚本了，所有的关键都在这个脚本上。wa通过这个脚本调用原生的接口，而微信用这个脚本来管理wa，包括它的生命周期。这里只谈原理就不贴代码了。Android可以参考JsBridge，IOS可以参考WebViewJavascriptBridge",
    "type": "p"
  },
  {
    "text": "六.传统的js库能用吗",
    "type": "h"
  },
  {
    "text": "大部分都不行。官方的解释是,页面的脚本逻辑是在JsCore中运行，JsCore是一个没有窗口对象的环境",
    "type": "li"
  },
  {
    "text": "所以不能使用bom相关的对象。而依赖bom的常用的比如说jQuery就无能为力了。这种说法太牵强了。实际上，这是故意为之的。wa正式部署使用webpack打的包，而在打包的过程中，把以下变量给屏蔽了：window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket",
    "type": "li"
  },
  {
    "text": "自然你就访问不了bom对象啦，当然其他很多对象也不能访问啦。这些对象如果访问，就是undefined。为什么要这样做呢？还不是为了管理和监控嘛。如果这些对象你能访问，那么你就可以像操作通常的网页一样操作wa，这是绝对不被允许的，所以，你懂的。 具体是怎么屏蔽的，帖段代码：",
    "type": "li"
  },
  {
    "text": `define("...", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket) { });`,
    "type": "p"
  },
  {
    type: "swiper",
    list: [{
        type: "image",
        url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg"
      },
      {
        type: "image",
        url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10005.jpg"
      },
      {
        type: "image",
        url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
      },
    ]
  },
]

module.exports = {
  list: list,
  backgroundColor: 'white',
  nav: {
    title: '微信小程序底层实现原理',
    icon1: 'back',
    text1: '返回', // icon2: 'roundadd',
  },
}