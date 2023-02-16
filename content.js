chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    /*console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");*/
    if (request.password && !sender.tab) {
      document.querySelectorAll("input[type='password']")
        .forEach((input) => {
          input.value = request.password;
      });
      sendResponse({ok: "ok"});
    }
  }
);
