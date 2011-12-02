function logTab(context, tabId, tab) {
  if (tab) {
    console.log("%s: tabId=%s url=%s window=%s index=%s", context, tabId, tab.url, tab.windowId, tab.index);
  } else {
    console.log("%s: tabId=%s, tab does not exist", context, tabId);
  }
}

function getAndShowTab(context, tabId) {
  chrome.tabs.get(tabId, function (tab) {
      logTab(context, tabId, tab);
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
      logTab("created", tab.id, tab);
    }
);

chrome.tabs.onRemoved.addListener(
    function (tabId, attachInfo) {
      getAndShowTab("removed", tabId);
    }
);

