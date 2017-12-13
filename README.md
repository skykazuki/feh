# feh
The javascript code to inject another js file which can translate the site https://game8.jp/fe-heroes/ from japanese to traditional chinese:

```
window.onload = function(){
  var s = document.createElement('script');
  s.type = "text/javascript";
  s.src = "https://skykazuki.github.io/feh/js/game8.js";
  document.body.appendChild(s);
};
```

To run this javascript in the site, you have 2 options:
#### Option 1.  manually run the script by developer console
1.  visit <https://game8.jp/fe-heroes/>
2.  use F12 to open browser developer console  
3.  c/p the javascript into the console input and run  
4.  repeat 1-3 every time you reload a site page  

#### Option 2.  automatically run the script by chrome extension
1.  install the chrome extension: [css-and-javascript-inject](https://chrome.google.com/webstore/detail/css-and-javascript-inject/ckddknfdmcemedlmmebildepcmneakaa?hl=zh-TW) 
2.  visit <https://game8.jp/fe-heroes/>
3.  open the extension by clicking the button right after address bar  
4.  switch to the 'javascript' tab and c/p the javascript code into it  
5.  reload the page  

## To disable temporarily
mark the 'document.body.appendChild(s);' line as below:
```
window.onload = function(){
  var s = document.createElement('script');
  s.type = "text/javascript";
  s.src = "https://skykazuki.github.io/feh/js/game8.js";
  //document.body.appendChild(s);
};
```
