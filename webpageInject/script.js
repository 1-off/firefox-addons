  filter.ondata = event => {
    let str = decoder.decode(event.data, {stream: true});
    // Just change any instance of Example in the HTTP response
    // to WebExtension Example.
    str = str.replace(/Example/g, 'WebExtension Example');
    filter.write(encoder.encode(str));
    filter.disconnect();
  

  return {};
  }

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.com/*"], types: ["main_frame"]},
  ["blocking"]
);
