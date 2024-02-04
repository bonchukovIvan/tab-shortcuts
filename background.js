chrome.commands.onCommand.addListener(function (command) {
  if (command === "new-tab-right") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentIndex = tabs[0].index;
      const newIndex = currentIndex + 1;

      chrome.tabs.create({ index: newIndex });
    });
  }
});