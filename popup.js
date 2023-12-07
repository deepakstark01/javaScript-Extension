// popup.js
document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
    var keyword = document.getElementById('keyword').value;
    var searchUrl = 'https://www.google.com/search?q=site:facebook.com+"' + encodeURIComponent(keyword) + '"';
    chrome.tabs.create({ url: searchUrl });
  }, false);
}, false);