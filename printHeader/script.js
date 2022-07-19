function rewriteUserAgentHeader(e) {
  let header_txt = ``;
  e.requestHeaders.forEach(function(header){
    header_txt+=`${header.name}: ${header.value}\n`;
    
  });

  console.log(`${header_txt}`);
  return {};
}

browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  {urls: ["<all_urls>"]},["blocking", "requestHeaders"]
);
