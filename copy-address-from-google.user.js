// ==UserScript==
// @name         Copy address from Google
// @namespace    http://gwg.nz/
// @version      0.4
// @description  Copy an address from Google with one click, in the right formatting
// @author       Mathias Foster
// @match        https://www.google.com/search?q=*
// @icon         https://www.google.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // selectors for the first and second line of the address
    let placeToPutButton = document.querySelector('div > b > div > div > div + span');

    // create and position the copy button
    let copyButton = document.createElement('button');
    copyButton.innerText = "📁";
    copyButton.id = "copyButton";
    placeToPutButton.parentElement.appendChild(copyButton);

    // add the copying functionality to the page
    let script = document.createElement('script');
    script.innerText = `let firstLine = document.querySelector('div > b > div > div > div').innerText; let secondLine = document.querySelector('div > b > div > div > div + span').innerText; document.querySelector("#copyButton").addEventListener("click", copy); function copy() {  const mySmartTextarea = document.createElement('textarea'); mySmartTextarea.innerHTML = firstLine + "\\r\\n" + secondLine; document.body.appendChild(mySmartTextarea); mySmartTextarea.select(); document.execCommand('copy'); document.body.removeChild(mySmartTextarea); document.querySelector("#copyButton").innerText = "✅"}`;
    document.body.appendChild(script);
})();
