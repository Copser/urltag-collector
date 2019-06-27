// popup.js

var setDOMInfo = info => {
	document.getElementById('url').textContent = info.url,
  document.getElementById('total').textContent = info.total,
  document.getElementById('tags').textContent = info.tags;
}


window.addEventListener("DOMContentLoaded", () => {
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, tabs => {
		chrome.tabs.sendMessage(
			tabs[0].id,
			{from: 'popup', subject: 'DOMInfo'},
			setDOMInfo);
	});
});