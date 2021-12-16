// ==UserScript==
// @name         Remove invisible characters from Pipefy PDF preview
// @namespace    http://gwg.nz/
// @version      0.1
// @description  The little invisible characters are a pain when pasting into Basecamp. Delete them.
// @author       You
// @match        https://app.pipefy.com/pipes/*/cards/*/pdf_templates/*/preview
// @icon         https://www.google.com/s2/favicons?domain=app.pipefy.com
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant    GM_addStyle
// ==/UserScript==
/*- The @grant directive is needed to work around a major design
    change introduced in GM 1.0.
    It restores the sandbox.
*/
// ==/UserScript==

(function() {
    'use strict';
    waitForKeyElements("#pdf-template > div > div > div > div > div > span > div > table > tbody > tr > td > p > span > span > span > span > span > span", updateTDs);

    function updateTDs() {
        let tds = document.querySelectorAll("td")

        for(var i in tds) {
            if(tds[i].innerText) {
                let text = tds[i].innerText.replace(/[\u0000-\u001F\u007F-\u009F-\u200B-\u200D-\uFEFF]/g, "")

                tds[i].innerHTML = text;
            }
        }
    }
})();
