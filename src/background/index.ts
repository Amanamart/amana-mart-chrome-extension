chrome.runtime.onInstalled.addListener(() => {
  console.log('AmanaMart Quick Assistant installed');
  
  chrome.contextMenus.create({
    id: "searchImageAmanaMart",
    title: "Search image on AmanaMart",
    contexts: ["image"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "searchImageAmanaMart" && info.srcUrl) {
    // Stage 1: Basic redirect to image search page with URL param
    // In Stage 2, this will send the image directly to the backend
    const searchUrl = `http://localhost:3000/search/image?url=${encodeURIComponent(info.srcUrl)}`;
    chrome.tabs.create({ url: searchUrl });
  }
});
