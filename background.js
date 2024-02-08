chrome.runtime.onInstalled.addListener(details => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({
      url: "views/installed.html"
    });
  }
});

chrome.commands.onCommand.addListener(function (command) {
  if (command === "new-tab-right") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentIndex = tabs[0].index;
      const newIndex = currentIndex + 1;

      chrome.tabs.create({ index: newIndex });
    });
  }

  if (command === "new-group") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const id = tabs[0].id;
      chrome.tabs.group({tabIds: id}, function (groupId) {
        chrome.tabGroups.update(groupId, {title: makeName(7)});
      });
    });
  }

  if (command === "duplication") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const id = tabs[0].id;
      chrome.tabs.duplicate(id);
    });
  }
});

function makeName(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}