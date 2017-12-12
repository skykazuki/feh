(function(){
  if(location.href.indexOf('fe-heroes') < 0 ){
    return;
  }
var header = [
['リセマラ','刷首抽'],
['ランキング','排行'],
['キャラクター','角色'],
['スキル','技能'],
['ガチャ','抽卡'],
['イベント','活動']
];
var dictionary = [
['リセマラ','刷首抽'],
['ランキング','排行'],
['キャラ','角色'],
['ステータス','能力值'],
['おすすめ','推薦'],
['ラインハルト','萊茵哈特'],
['リン','琳'],
];
var pageNav = document.querySelector('.p-gameNavText').innerHTML;
header.forEach(function(word){
  pageNav = pageNav.replace(new RegExp(word[0],'g'), word[1]);
});
document.querySelector('.p-gameNavText').innerHTML = pageNav;	
var pageContent = document.querySelector('.l-content').innerHTML;
header.concat(dictionary).forEach(function(word){
  pageContent = pageContent.replace(new RegExp(word[0],'g'), word[1]);
});
document.querySelector('.l-content').innerHTML = pageContent;	
	
})();

