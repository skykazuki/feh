# feh

chrome extension:  
https://chrome.google.com/webstore/detail/css-and-javascript-inject/ckddknfdmcemedlmmebildepcmneakaa?hl=zh-TW

javascript:  
```
window.onload = function(){
  var s = document.createElement('script');
  s.type = "text/javascript";
  s.src = "https://skykazuki.github.io/feh/js/game8.js";
  document.body.appendChild(s);
};
```
