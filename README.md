# firefox-addons

![](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension/webextension-anatomy.png)

# background script vs content script
- background scripts are something that run in background and listen for triggers while the user interacts with the chrome browser (such as listening for a click event on a tab)
- content scripts are the one's that actually interacts with the webpage (essentially DOM elements).

## Example navigating the documentation Inception level: 
- url https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
  - https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams
     - https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

# From Background Script to Content Script
- https://stackoverflow.com/questions/41889189/what-exactly-are-content-script-and-background-script-in-the-chrome-extension
- https://saisandeepvaddi.com/blog/how-to-communicate-between-content-script-popup-background-in-web-extensions
- https://stackoverflow.com/questions/26156978/sending-message-from-content-script-to-background-script-breaks-chrome-extension


## Official documentations
- Chrome https://developer.chrome.com/docs/extensions/mv3/match_patterns/
- Firefox https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
- https://chat.mozilla.org/#/room/#addons:mozilla.org
- https://searchfox.org/mozilla-central/rev/108c7843696fdf951083889d6fb858953139be96/toolkit/components/extensions/test/mochitest/test_ext_webrequest_upload.html#72-121
- https://developer.mozilla.org/en-US/docs/Web/API
