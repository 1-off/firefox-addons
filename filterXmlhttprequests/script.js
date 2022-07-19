function listener(details) {
  var filter = browser.webRequest.filterResponseData(details.requestId);
  var decoder = new TextDecoder("utf-8");
  var encoder = new TextEncoder();


//webRequest.StreamFilter
  filter.ondata = event => {
	
    var str = decoder.decode(event.data, {stream: true});
   console.log( str.length, str);
    filter.write(encoder.encode(str));
    filter.disconnect();
  }

  return {};
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["<all_urls>"], types: ["xmlhttprequest"]},
  ["blocking"]
);
