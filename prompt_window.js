const input = document.querySelector("#prompt");
const button = document.querySelector("#submit");
const words = document.querySelector("#somewords");

button.addEventListener("click", runScript);

function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function runScript() {
	parseInput();

	words.innerText = "Great request! Clicking links now...";
	
	// Source - https://stackoverflow.com/a/26391692
	// Posted by Marco Bonelli, modified by community. See post 'Timeline' for change history
	// Retrieved 2026-04-26, License - CC BY-SA 4.0
	setTimeout(() => {
	chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    	chrome.scripting.executeScript({
			target: {tabId: tabs[0].id},
			files: ['click_link.js']
		}).then(window.close());
    })
	}, 2500);
}

function parseInput() {
	// does nothing
}

