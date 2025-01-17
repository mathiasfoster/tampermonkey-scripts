// ==UserScript==
// @name         Add Table of Contents to Basecamp documents
// @namespace    http://basecamp.com
// @version      0.3
// @description  Add a table of contents at the top of Basecamp documents in a specific team
// @author       Mathias Foster
// @match        https://3.basecamp.com/*/buckets/*/documents/*
// @icon         https://www.google.com/s2/favicons?domain=basecamp.com
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';
    console.log("Userscript is working");

    let scrape = document.querySelectorAll('.formatted_content > h1');

    // Target the main content instead of the header
    let content = document.querySelector('article');

    let tableOfContents = document.createElement('section');
    tableOfContents.setAttribute('id', 'custom-table-of-contents'); // Add a unique ID

    let tableOfContentsUl = document.createElement('ul');

    // Scoped CSS for the Table of Contents
    var css = '#custom-table-of-contents .menu-item:hover { text-decoration: underline; }',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
    style.type = 'text/css';
    head.appendChild(style);
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    for (let i = 0; i < scrape.length; i++) {
        if (scrape[i].innerText) {
            // Add id to heading
            scrape[i].setAttribute("id", "heading" + i.toString());

            // Create new link
            let newA = document.createElement('a');
            newA.classList.add("menu-item");

            // Attach click event listener
            newA.addEventListener("click", function () {
                document.location.hash = "heading" + i.toString();
            });

            // Create new list item
            let newLi = document.createElement('li');
            newA.appendChild(newLi);

            // Create text inside list item
            let newLiText = document.createTextNode(scrape[i].innerText);
            newLi.appendChild(newLiText);

            // Add to Table of Contents element
            tableOfContentsUl.appendChild(newA);
        }
    }

    tableOfContents.appendChild(tableOfContentsUl);

    // Insert Table of Contents at the top of the main content
    content.insertBefore(tableOfContents, content.firstChild);

    console.log(tableOfContents);
})();
