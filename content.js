// content.js

chrome.runtime.sendMessage({
	from: "content",
	subject: "showPageAction",
})

// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {

    var domInfo = {
      url: location.href,
      // tags: document.querySelectorAll('*'),
      tags: document.body.getElementsByTagName('*'),
			total: document.querySelectorAll('*').length,
    };
    response(domInfo);
  }
});