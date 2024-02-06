const closeAction = async(e) => {
    const tab = await chrome.tabs.query({
        active: true,
        lastFocusedWindow: true,
    });
    chrome.tabs.remove(tab[0].id);
}

const closeBtn = document.getElementById("close-btn");

if(closeBtn) {
    closeBtn.addEventListener("click", closeAction);
}