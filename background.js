// background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // if (request.action === 'scrape') {
  //   fetch(request.url)
  //     .then(response => response.text())
  //     .then(html => {
  //       const parser = new DOMParser();
  //       const doc = parser.parseFromString(html, 'text/html');
  //       const anchors = Array.from(doc.getElementsByTagName('a'));
  //       const fbProfiles = anchors.filter(a => a.href.includes('facebook.com'));
  //       sendResponse({data: fbProfiles.map(profile => profile.href)});
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //       sendResponse({error: error.toString()});
  //     });
  //   return true;  // Will respond asynchronously.
  // }

  // background.js
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "FB_PROFILES") {
      console.log(message.profiles); // Do something with the profiles
    }
  });
});
