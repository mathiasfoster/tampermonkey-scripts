// ==UserScript==
// @name         Outline required fields on an Unleashed sales order
// @namespace    https://gwg/mz
// @version      0.1
// @description  Outline required fields on an Unleashed sales order
// @author       You
// @match        https://au.unleashedsoftware.com/v2/SalesOrder/Update/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=unleashedsoftware.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let redBorder = "3px solid rgb(225, 30, 57)";
    let referenceField = document.querySelector("#InvoiceHeaderTable > tbody > tr:nth-child(3)");
    referenceField.style.border = redBorder;
    let deliveryMethod = document.querySelector("#InvoiceHeaderTable > tbody > tr:nth-child(11)");
    deliveryMethod.style.border = redBorder;
    let addressFields = document.querySelector("#DeliveryDetailsTable > tbody");
    addressFields.style.border = redBorder;
})();
