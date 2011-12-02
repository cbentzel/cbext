function logTab(context, tab) {
  console.log("%s: url=%s id=%s window=%s index=%s", context, tab.url, tab.id, tab.windowId, tab.index);
}

function getAndShowTab(context, tabId) {
  chrome.tabs.get(tabId, function (tab) {
      logTab(context, tab);
    });
}

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      if (details.url.indexOf("://cbentzel-dev-test.appspot.com") != -1) {
        getAndShowTab("onBeforeRequest", details.tabId);
      }
    },
    {},
    []
);


chrome.tabs.onCreated.addListener(
    function (tab) {
      logTab("created", tab);
    }
);

chrome.tabs.onRemoved.addListener(
    function (tabId, attachInfo) {
      getAndShowTab("removed", tabId);
    }
);

