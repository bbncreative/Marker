document.querySelector('#openMarker').addEventListener('click', function() {
  chrome.tabs.create({url: "../index.html"});
});
