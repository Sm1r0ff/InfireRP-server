import * as alt from 'alt-client';

alt.onServer('Auth-Reg:Init', init)

let url = `http://resource/client/index.html`;

let webview: alt.WebView;

function init() {
    alt.toggleGameControls(false);
    if (webview == undefined){
        webview = new alt.WebView(url);
        webview.focus();
        alt.showCursor(true)
    }
}