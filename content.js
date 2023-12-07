// // content.js
// const observer = new MutationObserver(() => {
//     const anchors = Array.from(document.getElementsByTagName('a'));
//     const fbProfiles = anchors.filter(a => a.href.includes('facebook.com'));
//     fbProfiles.forEach(profile => console.log(profile.href));
//   });
  
//   observer.observe(document, { childList: true, subtree: true });

// content.js
const observer = new MutationObserver(() => {
    const anchors = Array.from(document.getElementsByTagName('a'));
    const fbProfiles = anchors.filter(a => a.href.includes('facebook.com')).map(a => a.href);
    if (fbProfiles.length > 0) {
      chrome.runtime.sendMessage({ type: 'FB_PROFILES', profiles: fbProfiles });
      console.log('Found Facebook profiles:', fbProfiles);
    }
  });
  
  observer.observe(document, { childList: true, subtree: true });