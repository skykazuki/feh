var dictionary = [
['リセマラ','刷首抽'],
['ランキング','排行'],
];
var pageContent = document.querySelector('.l-content').innerHTML;
dictionary.forEach(function(word){
  pageContent = pageContent.replace(new RegExp(word[0],'g'), word[1]);
});
document.querySelector('.l-content').innerHTML = pageContent;