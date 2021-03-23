chrome.browserAction.onClicked.addListener({
    chrome.scripting.executeScript({
        file: 'popup.js';
    });
});