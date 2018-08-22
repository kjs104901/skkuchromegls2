
var customCode = "$('#mypage > form > div > div.pageHeader > div.mainMenu > div > ul > li.system').off();";
customCode += "$('#mypage > form > div > div.pageHeader > div.mainMenu > div > ul > li.system').on('click', function() {";

// turn off other buttons img
customCode += "$('#mypage > form > div > div.pageHeader > div.mainMenu > div > ul > li.home > a > span.ico > img').attr('src','/emate/images/icon/ic58_home.png');";
customCode += "$('#mypage > form > div > div.pageHeader > div.mainMenu > div > ul > li.mail > a > span.ico > img').attr('src','/emate/images/icon/ic58_mail.png');";
customCode += "$('#mypage > form > div > div.pageHeader > div.mainMenu > div > ul > li.appr > a > span.ico > img').attr('src','/emate/images/icon/ic58_appr.png');";
customCode += "$('#mypage > form > div > div.pageHeader > div.mainMenu > div > ul > li.bag > a > span.ico > img').attr('src','/emate/images/icon/ic58_bag.png');";
customCode += "$('#mypage > form > div > div.pageHeader > div.mainMenu > div > ul > li.gmail > a > span.ico > img').attr('src','/emate/images/icon/ic58_gmail.png');";
customCode += "$('#mypage > form > div > div.pageHeader > div.mainMenu > div > ul > li.hout > a > span.ico > img').attr('src','/emate/images/icon/ic58_hout.png');";
customCode += "$('#mypage > form > div > div.pageHeader > div.mainMenu > div > ul > li.cmnt > a > span.ico > img').attr('src','/emate/images/icon/ic58_cmnt.png');";
customCode += "$('#mypage > form > div > div.pageHeader > div.mainMenu > div > ul > li.monitor > a > span.ico > img').attr('src','/emate/images/icon/ic58_monitor.png');";
customCode += "$('#mypage > form > div > div.pageHeader > div.mainMenu > div > ul > li.data > a > span.ico > img').attr('src','/emate/images/icon/ic58_data.png');";
customCode += "$('#mypage > form > div > div.pageHeader > div.mainMenu > div > ul > li.icampus > a > span.ico > img').attr('src','/emate/images/icon/ic58_icampus.png');";
customCode += "$('#mypage > form > div > div.pageHeader > div.mainMenu > div > ul > li.survey > a > span.ico > img').attr('src','/emate/images/icon/ic58_survey.png');";
customCode += "$('#mypage > form > div > div.pageHeader > div.mainMenu > div > ul > li.board > a > span.ico > img').attr('src','/emate/images/icon/ic58_board.png');";
customCode += "$('#mypage > form > div > div.pageHeader > div.mainMenu > div > ul > li.system > a > span.ico > img').attr('src','/emate/images/icon/ic58_system.png');";
customCode += "$('#mypage > form > div > div.pageHeader > div.mainMenu > div > ul > li.know > a > span.ico > img').attr('src','/emate/images/icon/ic58_know.png');";

// turn on the button img
customCode += "$('#mypage > form > div > div.pageHeader > div.mainMenu > div > ul > li.system > a > span.ico > img').attr('src','/emate/images/icon/ic58_system_on.png');";

// open gls window
customCode += "newOpenBrowser('/wps/myinfo/glsCall.jsp','false', 730, 580,null);";
customCode += "});";
var script = document.createElement('script');
var code = document.createTextNode('(function() {' + customCode + '})();');
script.appendChild(code);
(document.body || document.head).appendChild(script);
