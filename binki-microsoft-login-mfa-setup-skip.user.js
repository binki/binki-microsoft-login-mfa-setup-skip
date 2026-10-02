// ==UserScript==
// @name binki-microsoft-login-mfa-setup-skip
// @homepageURL https://github.com/binki/binki-microsoft-login-mfa-setup-skip
// @version 1.0.0
// @match https://login.microsoftonline.com/*
// @require https://github.com/binki/binki-userscript-when-element-query-selector-async/raw/0a9c204bdc304a9e82f1c31d090fdfdf7b554930/binki-userscript-when-element-query-selector-async.js
// ==/UserScript==

(async () => {
  const notNowLink = await whenElementQuerySelectorAsync(document.body, '#skipMfaRegistrationLink');
  notNowLink.click();
})();
