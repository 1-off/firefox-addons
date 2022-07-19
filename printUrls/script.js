function listener(details) {
  console.log(details.url);
}
browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["<all_urls>"]}
);
