// ==UserScript==
// @name         Add Table of Contents to Basecamp documents
// @namespace    http://basecamp.com
// @version      0.1
// @description  What the name sez!
// @author       Mathias Foster
// @match        https://3.basecamp.com/3781719/buckets/5302003/documents/*
// @icon         https://www.google.com/s2/favicons?domain=basecamp.com
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    console.log("Userscript is working");

    let scrape = document.querySelectorAll('.formatted_content > h1');

    let header = document.querySelector('article > header');

    let tableOfContents = document.createElement('section');
    header.appendChild(tableOfContents);

    let tableOfContentsUl = document.createElement('ul');

    for(var i in scrape) {
        if(scrape[i].innerText && i > 0) {
            // add id to heading
            scrape[i].setAttribute("id", "heading" + i.toString());

            // create new link
            let newA = document.createElement('a');
            newA.setAttribute("onclick", "if(window.location.href.indexOf('#') !== -1) { var url = window.location.href; var hash = window.location.hash; var index_of_hash = url.indexOf(hash) || url.length; var hashless_url = url.substr(0, index_of_hash); window.location.href = hashless_url + '#heading" + i.toString() + "'; } else { window.location.href += '#heading" + i.toString() + "'; }");

            // create new list item
            let newLi = document.createElement('li');
            newA.appendChild(newLi);

            // create text inside list item
            let newLiText = document.createTextNode(scrape[i].innerText);
            newLi.appendChild(newLiText);

            // add to Table of Contents element
            tableOfContentsUl.appendChild(newA);
        }
    }

    tableOfContents.appendChild(tableOfContentsUl);

    console.log(tableOfContents);
})();
