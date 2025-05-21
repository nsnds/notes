# Native 和 H5 通信

# URL Scheme

alipays://platformapi/startapp?appId=

weixin://path

# URL Link

普通的网址

https://path

# JSBridge

原理：
ios上的WKWebView提供WKScriptMessageHandler
android上的WebView提供JavaScriptInterface

调用ios：window.webkit.messageHandlers.[方法名].postMessage(数据)

调用android：window.android.[方法名](数据)

库：JSBridge、DSBridge

