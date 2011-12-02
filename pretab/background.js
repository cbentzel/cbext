chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      if (details.url.indexOf("://cbentzel-dev-test.appspot.com") != -1) {
        chrome.tabs.get(details.tabId, function(x) { console.log(x); });
      }
    },
    {},
    []
);

