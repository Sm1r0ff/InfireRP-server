import * as alt from 'alt-client';
import { WebViewEvents } from '../../shared/webviewEvents.js';

let view: alt.WebView;
let isFocused = false;
let isCursor = false;

alt.onServer('Start:WebViews', StartWebView);

export function CursorWebView() {
    if (isCursor) {
        alt.showCursor(false);
        alt.toggleGameControls(true);
        isCursor = false;
    } else {
        alt.showCursor(true);
        alt.toggleGameControls(false);
        isCursor = true;
    }
}

export function focusWebView() {
    if (isFocused) {
        view.unfocus();
        CursorWebView();
        isFocused = false;
    } else {
        view.focus();
        CursorWebView();
        isFocused = true;
    }
}

export function StartWebView() {
    if (view) {
        view.emit(WebViewEvents.startWebViews, true);
        focusWebView();
        return;
    }
    view = new alt.WebView('http://assets/webviews/index.html');

    view.emit(WebViewEvents.startWebViews, true);

    view.on(WebViewEvents.cursorWebView, CursorWebView);

    focusWebView();
}