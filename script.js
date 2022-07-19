//------------ logRootCert
// "use strict";
// var rootCertStats = {};
// /*
// On an onHeadersReceived event, if there was a successful TLS connection
// established, fetch the root cert and look at its subject.
// If we haven't seen this subject before, add it. If we have, increment its stats.
// */
// async function logRootCert(details) {
//   try {
//     console.log( details.requestId);
//     let securityInfo = await browser.webRequest.getSecurityInfo(
//       details.requestId,
//       {"certificateChain": true}
//     );
//     if ((securityInfo.state == "secure" || securityInfo.state == "weak") &&
//         !securityInfo.isUntrusted) {
//       let rootName = securityInfo.certificates[securityInfo.certificates.length - 1].subject;
//       console.log(rootName);
//       if (rootCertStats[rootName] === undefined) {
//         rootCertStats[rootName] = 1;
//       } else {
//         rootCertStats[rootName] = rootCertStats[rootName] + 1;
//       }
//     }
//   }
//   catch(error) {
//     console.error(error);
//   }
// }
// browser.webRequest.onHeadersReceived.addListener(logRootCert,
//     {urls: ["<all_urls>"]},
//     ["blocking"]
//   );




// get event data length
//   filter.ondata = event => {
//     console.log(`filter.ondata received ${event.data.byteLength} bytes`);
//     filter.write(event.data);
//   };
  



// -------------------- change webpage 
//   filter.ondata = event => {
//     let str = decoder.decode(event.data, {stream: true});
//     // Just change any instance of Example in the HTTP response
//     // to WebExtension Example.
//     str = str.replace(/Example/g, 'WebExtension Example');
//     filter.write(encoder.encode(str));
//     filter.disconnect();
  

//   return {};
//   }

// browser.webRequest.onBeforeRequest.addListener(
//   listener,
//   {urls: ["https://example.com/*"], types: ["main_frame"]},
//   ["blocking"]
// );



// //----------------- filter xmlhttprequest 
// function listener(details) {
//   var filter = browser.webRequest.filterResponseData(details.requestId);
//   var decoder = new TextDecoder("utf-8");
//   var encoder = new TextEncoder();


// //webRequest.StreamFilter
//   filter.ondata = event => {
	
//     var str = decoder.decode(event.data, {stream: true});
//    console.log( str.length, str);
//     filter.write(encoder.encode(str));
//     filter.disconnect();
//   }

//   return {};
// }

// browser.webRequest.onBeforeRequest.addListener(
//   listener,
//   // {urls: ["<all_urls>"], types: ["xmlhttprequest"]},
//   {urls: ["<all_urls>"]},
//   ["blocking"]
// );


// -------------------- logs urls
function listener(details) {
  console.log(details.url);
}
browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["<all_urls>"]}
);




// change user agent
// let ua = "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";
// function rewriteUserAgentHeader(e) {
//   e.requestHeaders.forEach(function(header){
    
//     if (header.name.toLowerCase() == "user-agent") {
//       console.log(`[${header.name}\n${header.value}]`);
//       header.value = ua;
//       console.log(`[${header.name}\n${header.value}]`);
//       console.log('-------------')
//     }
//   });
//   return {requestHeaders: e.requestHeaders};
// }

// browser.webRequest.onBeforeSendHeaders.addListener(
//   rewriteUserAgentHeader,
//   {urls: ["<all_urls>"]},
//   ["blocking", "requestHeaders"]
// );


//printout header
// function rewriteUserAgentHeader(e) {
//   let header_txt = ``;
//   e.requestHeaders.forEach(function(header){
//     header_txt+=`${header.name}: ${header.value}\n`;
    
//   });

//   console.log(`${header_txt}`);
//   return {};
// }

// browser.webRequest.onBeforeSendHeaders.addListener(
//   rewriteUserAgentHeader,
//   {urls: ["<all_urls>"]},["blocking", "requestHeaders"]
// );




// function logDownloads(downloads) {
//   for (let download of downloads) {
//     console.log(download.id);
//     console.log(download.url);
//   }
// }

// function onError(error) {
//   console.log(`Error: ${error}`);
// }

// let searching = browser.downloads.search({
//   limit: 1,
//   orderBy: ["-startTime"]
// });

// setInterval(searching.then(logDownloads, onError),5000);

