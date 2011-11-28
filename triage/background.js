function itemListener(request, sender, callback) {
    chrome.tabs.create({selected: false, url: request.url});
    callback({});
}

chrome.extension.onRequest.addListener(itemListener)
