function handleClick() {
  browser.browserAction.setBadgeText({text: 'added...'});
  browser.tracking.addRule('http://foo.com');
}

browser.browserAction.onClicked.addListener(handleClick);
