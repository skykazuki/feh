(function(){
  if(location.href.indexOf('fe-heroes') < 0 ){
    return;
  }
var header = [
['リセマラ','刷首抽'],
['ランキング','排行'],
['キャラクター','角色'],
['スキル','技能'],
['ガチャ','卡池'],
['イベント','活動']
];
var dictionary = [  
['キャラ','角色'],
['ステータス','能力值'],
['おすすめ','推薦'],
['オススメ','推薦'],
['プレイ','遊玩'],
['ガイド','指南'],
['水着','泳裝'],
['ダメージ','傷害'],
['パーティ','隊伍'],
['バトル','戰鬥'],
['システム','系統'],
['ツール','工具'],
['アイテム','道具'],
['ストーリー','劇情'],
['メイン','主'],
['マップ','地圖'],
['スペシャル','特別'],
['クエスト','任務'],
['レベル','等級'],
['セリフ','台詞'],
['クエスト','任務'],
['まとめ','總結'],
['引き寄せ','拉近'],
['引き戻し','帶回'],
['入れ替え','替換'],
['ぶちかまし','重擊'],
['体当たり','衝撞'],
['回り込み','迂迴'],
["アーダン","亞丹"],["アイク","艾克"],["アイラ","艾伊拉"],["アクア","阿庫婭"],["アサマ","淺間"],["アズール","阿茲爾"],["アテナ","雅典娜"],["アベル","阿貝爾"],["アメリア","亞美利雅"],["アルヴィス","阿爾維斯"],["アルフォンス","阿爾馮斯"],["アルム","阿雷武"],["アンナ","安娜"],["ヴァルター","瓦爾達"],["ヴィオール","維沃爾"],["ヴェロニカ","維洛妮卡"],["ウェンディ","溫蒂"],["ウルスラ","烏爾斯拉"],["エイリーク","艾莉可"],["エスト","愛絲特"],["エフィ","艾菲"],["エフラム","艾夫拉姆"],["エリーゼ","艾麗澤"],["エリウッド","艾利烏德"],["エリンシア","艾琳西亞"],["エルトシャン","艾爾多尚"],["エルフィ","艾爾菲"],["オーディン","奧丁"],["オグマ","奧古馬"],["オスカー","奧斯卡"],["オボロ","朧"],["オリヴィエ","奧利薇"],["オルエン","歐爾玟"],["ガイア","蓋亞"],["カイン","凱因"],["カゲロウ","陽炎"],["カザハナ","風花"],["カタリナ","卡達麗娜"],["カチュア","卡秋雅"],["カミュ","卡謬"],["カミラ","卡美拉"],["カムイ","神威"],["カレル","卡列爾"],["ギュンター","君特"],["クライネ","克萊涅"],["クラリーネ","克拉莉涅"],["クレア","克萊爾"],["グレイ","格萊"],["クレイン","克萊因"],["クレーベ","克雷貝"],["クロム","庫洛武"],["ゴードン","哥頓"],["サーリャ","撒拉"],["サイゾウ","彩造"],["サクラ","櫻"],["サナキ","莎娜琪"],["ジークベルト","齊格貝爾特"],["シーダ","希達"],["シーマ","希瑪"],["ジェイガン","傑剛"],["ジェニー","傑妮"],["シグルド","西格爾特"],["シグレ","詩格萊"],["漆黒の騎士","漆黑騎士"],["シノノメ","東雲"],["シャーロッテ","夏洛特"],["シャニー","夏妮"],["ジャファル","賈法爾"],["シャラ","夏拉"],["シャロン","夏蓉"],["ジョーカー","喬克"],["ジョルジュ","喬爾裘"],["スルト","斯爾特"],["セーバー","賽巴"],["セーラ","賽拉"],["セシリア","瑟西莉亞"],["セツナ","剎那"],["ゼト","賽特"],["セネリオ","賽涅里歐"],["ゼフィール","賽菲爾"],["セリカ","賽莉卡"],["セリス","賽列斯"],["セルジュ","塞爾裘"],["ゼロ","零"],["ソール","索爾"],["ソニア","索尼婭"],["ソフィーヤ","蘇菲亞"],["ソレイユ","索雷優"],["ソワレ","索瓦蕾"],["ターナ","塔娜"],["タクミ","拓海"],["チキ","琪姬"],["ツバキ","椿"],["ディアドラ","迪雅朵拉"],["ティアマト","狄亞馬特"],["ティアモ","蒂亞莫"],["ティルテュ","提爾透"],["デューテ","迪優特"],["ドーガ","多加"],["ドニ","多尼"],["ドルカス","多爾卡斯"],["ナーシェン","拿榭恩"],["ナバール","拿巴爾"],["ニニアン","尼尼安"],["ニノ","妮諾"],["ネフェニー","涅菲妮"],["ノノ","儂儂"],["バーツ","巴茲"],["バアトル","巴多爾"],["パオラ","帕奧拉"],["ハロルド","哈洛德"],["ヒーニアス","西尼亞斯"],["ピエリ","皮艾莉"],["ヒナタ","日向"],["ヒノカ","火乃香"],["ファ","法"],["フィヨルム","菲約爾姆"],["フィル","菲爾"],["フェリシア","菲利西亞"],["プリシラ","普莉西亞"],["フレデリク","弗雷德里克"],["フロリーナ","芙羅利娜"],["ヘクトル","海克托爾"],["ベルカ","貝爾卡"],["ベルクト","貝爾克特"],["ヘンリー","亨利"],["ボーイ","波伊"],["ホークアイ","霍克艾"],["マークス","馬克斯"],["マシュー","馬修"],["マチルダ","瑪蒂爾達"],["マリア","瑪莉亞"],["マリク","馬利克"],["マルス","馬爾斯"],["ミシェイル","米謝爾"],["ミスト","密絲特"],["ミネルバ","米奈娃"],["メイ","梅伊"],["ユリア","尤莉亞"],["ヨシュア","約書亞"],["ラインハルト","萊茵哈特"],["ラケシス","拉克西絲"],["ラズワルド","拉茲沃德"],["リズ","莉茲"],["リフ","利夫"],["リョウマ","龍馬"],["リリーナ","莉莉娜"],["リンダ","琳達"],["リン","琳"],["ルーク","路克"],["ルーテ","盧特"],["ルーナ","露娜"],["ルカ","盧卡"],["ルキナ","露琪娜"],["ルセア","魯賽亞"],["ルフレ","魯弗萊"],["レイヴァン","瑞文"],["レイ","雷伊"],["レーヴァテイン","瑞瓦提恩"],["レオン","里昂"],["レオ","雷歐"],["レベッカ","蕾貝卡"],["ロイド","洛伊德"],["ロイ","羅伊"],["ローロー","羅羅"],["ロキ","洛基"],["ロディ","羅迪"],["ロビン","羅賓"],["ロンクー","隆克"],["ワユ","瓦育"],
['1マス','1格'],
['2マス','2格']];
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

