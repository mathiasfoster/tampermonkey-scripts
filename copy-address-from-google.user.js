// ==UserScript==
// @name         Copy address from Google
// @namespace    http://gwg.nz/
// @version      0.2
// @description  Copy an address from Google with one click, in the right formatting
// @author       Mathias Foster
// @match        https://www.google.com/search?q=*
// @icon         https://www.google.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // exit if the search isn't for an address
    if(!document.querySelector) {
        return;
    }

    // selectors for the first and second line of the address
    let firstLine = document.querySelector('.desktop-title-content');
    let secondLine = document.querySelector('.desktop-title-subcontent');

    // create and position the copy button
    let copyButton = document.createElement('button');
    copyButton.setAttribute("onclick", "copy()");
    copyButton.innerText = "📁";
    copyButton.id = "copyButton";
    firstLine.parentElement.appendChild(copyButton);

    // add the copying functionality to the page
    let script = document.createElement('script');
    script.innerText = `let firstLine = document.querySelector('.desktop-title-content').innerText; let secondLine = document.querySelector('.desktop-title-subcontent').innerText; function copy() {  const mySmartTextarea = document.createElement('textarea'); mySmartTextarea.innerHTML = firstLine + "\\r\\n" + secondLine; document.body.appendChild(mySmartTextarea); mySmartTextarea.select(); document.execCommand('copy'); document.body.removeChild(mySmartTextarea); document.querySelector("#copyButton").innerText = "✅"}`;
    document.body.appendChild(script);
})();
