// ==UserScript==
// @name         Update quote reference in Xero with WINZ CUR
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Update the reference field on the new quote page in Xero.
// @author       You
// @match        https://go.xero.com/app/!v!s-w/quotes/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your new reference value here
    var newReference = "CUR001635364";

    // Function to update the reference field
    function updateReferenceField() {
        var referenceInput = document.querySelector('input[data-automationid="reference-input--input"]');
        if (referenceInput) {
            referenceInput.value = newReference;
        } else {
            console.log("Reference field does not exist.");
        }
    }

    // Call the function to update the reference field when the page is ready
    window.onload = function() {
        setTimeout(function() {
        updateReferenceField();
        }, 3000);
    };

})();
