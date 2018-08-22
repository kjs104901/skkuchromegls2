if (-1 < document.head.innerText.indexOf("document.loginForm.D1.value")) {
    temp_str = document.head.innerText;

    D1 = temp_str.split('document.loginForm.D1.value = "')[1].split('"')[0];
    roundkey = temp_str.split('document.loginForm.roundkey.value = "')[1].split('"')[0];
    D3 = temp_str.split('document.loginForm.D3.value = "')[1].split('"')[0];
    type = temp_str.split('document.loginForm.type.value = "')[1].split('"')[0];


    document.getElementsByName("D1")[0].value = D1;
    document.getElementsByName("roundkey")[0].value = roundkey;
    document.getElementsByName("D3")[0].value = D3;
    document.getElementsByName("type")[0].value = type;

    loginFormTmp = document.getElementsByName("loginForm")[0];
    loginFormTmp.action = loginFormTmp.retPage.value;
    loginFormTmp.submit();
}
else if (-1 < document.head.innerText.indexOf("fnLoginUser()")) {
    if (-1 < document.head.innerText.indexOf("document.loginForm.target")) {
        var roundkeyStart = document.head.innerText.indexOf('roundkey_c = "') + 'roundkey_c = "'.length;
        var tempStr = document.head.innerText.substr(roundkeyStart);
        var roundkeyEnd = tempStr.indexOf('"')
        var roundkey_c = tempStr.substring(0, roundkeyEnd);

        try {
            TrustChecker.SetTrustedSite("https://*.skku.edu;https://*.skku.ac.kr;https://admin.skku.edu;http://*.skku.edu;http://*.skku.ac.kr;http://portal.skku.edu;http://*.icampus.ac.kr;");
            TrustChecker.AddTrustedSite();
        } catch (err) { }

        document.querySelector('form[name="loginForm"]').roundkey.value = roundkey_c;
        document.querySelector('form[name="loginForm"]').action = "/co/COCOUsrLoginAction.do";
        document.querySelector('form[name="loginForm"]').target = "_self";

        document.body.innerHTML = document.body.innerHTML.replace('<img src="/co/images/login/btn_login.gif" alt="LOGIN">', '');
        document.body.innerHTML = document.body.innerHTML.replace('<a href="javascript:fnLoginUser();">', '<input type = "IMAGE" value = "submit" src="/co/images/login/btn_login.gif" name="Submit" value="Submit"  align="absmiddle" style="margin-top: 75px;margin-left: 250px;"/>');
        document.body.innerHTML = document.body.innerHTML.replace('</a></div>', '</div>');
    }
    else {
        document.getElementsByName("loginForm")[0].submit();
    }
}
else {
    globalVal = document.head.getElementsByTagName("script")[3].innerText.split('MiInstaller.GlobalVal = "')[1].split('";')[0];

    chrome.storage.sync.set({ globalVal: globalVal });
    chrome.storage.sync.set({ runGLS: true });

    document.head.innerHTML = "";

    style_str = "";

    style_str += "<style>"
    style_str += ".button {"
    style_str += "  display: inline-block;"
    style_str += "  border-radius: 4px;"
    style_str += "  background-color: #3284f0;"
    style_str += "  border: none;"
    style_str += "  color: #FFFFFF;"
    style_str += "  text-align: center;"
    style_str += "  font-size: 20px;"
    style_str += "  padding: 10px;"
    style_str += "  width: 150px;"
    style_str += "  transition: all 0.5s;"
    style_str += "  cursor: pointer;"
    style_str += "  margin: 5px;"
    style_str += "  text-decoration: none;"
    style_str += "}"


    style_str += "</style>"

    script_str = "";

    document.head.innerHTML += style_str;

    tplsvc = chrome.runtime.getURL('TPLSvc_Setup.exe');

    document.body.innerHTML = "";

    document.body.innerHTML += "<h1 style='margin-left:50px; margin-top:20px; margin-bottom:0px;'>SKKU GLS on Google Chrome</h1>";
    document.body.innerHTML += "<h5 style='float:right; margin:0px; margin-right:10px;'><a target='_blank' href='http://skkuportal.com/'>http://skkuportal.com/</a></h5>";
    document.body.innerHTML += "<div style='clear:both;'></div>";
    document.body.innerHTML += "<h4 style='margin-left:40px; margin-top:50px; margin-bottom:0px;'>두 가지 프로그램이 설치되어 있어야 합니다.</h3>";
    document.body.innerHTML += "<h4 style='margin-left:40px; margin-top:10px; margin-bottom:0px;'>정상적으로 설치되어 있을 경우 자동으로 GLS가 실행됩니다.</h4>";
    document.body.innerHTML += "<h3 style='margin-left:40px; margin-top:40px; margin-bottom:0px;'>MiPlatform (기존 익스플로러 GLS 실행 시 자동 설치)</h3>";
    document.body.innerHTML += "<div style='margin-top:20px; margin-bottom:0px;'></div>";
    document.body.innerHTML += '<center><a id="linklaucher" class="button" href="https://admin.skku.edu/co/jsp/installer/MiPlatformInstallEngine320U_SKKU.exe">수동 설치</a></center>';
    document.body.innerHTML += "<h3 style='margin-left:40px; margin-top:50px; margin-bottom:0px;'>TPLSvc (크롬 구동을 위한 프로그램. 직접 설치 필요)</h3>";
    document.body.innerHTML += "<div style='margin-top:20px; margin-bottom:0px;'></div>";
    document.body.innerHTML += '<center><a id="linklaucher" class="button" href="http://www.kocoinfo.com/common/bindownload/BinDownload.asp?filename=TPLSvc_Setup.exe&Map=KOCODownload">설 치</a></center>';
    document.body.innerHTML += '<center><div style="font-size:15px">위 버튼으로 다운이 안 될 경우 아래 링크</div></center>';
    document.body.innerHTML += '<center><a target="_blank" href="https://drive.google.com/file/d/1TWnlr5KyCIBPcHJh3xUG-dHBU1dE3wIg/view">다운로드(구글 드라이브)</a></center>';
    document.body.innerHTML += '<center><a target="_blank" href="http://support.tobesoft.co.kr/Next_JSP/nexacroHome/Next_JSP/FileDownload/fileDownload.jsp?path=Z201804&file=Z201804_2018040079-TPLSvc_Setup.zip">다운로드(공식 홈페이지)</a></center>';
}