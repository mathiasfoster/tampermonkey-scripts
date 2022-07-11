// ==UserScript==
// @name         Outline required fields on an Unleashed sales order
// @namespace    https://gwg/mz
// @version      0.2
// @description  Outline required fields on an Unleashed sales order
// @author       You
// @match        https://au.unleashedsoftware.com/v2/SalesOrder/Update/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=unleashedsoftware.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let redBorder = "3px solid rgb(225, 30, 57)";
    if(document.querySelector("#CustomerRef").value === "") {
        let referenceField = document.querySelector("#InvoiceHeaderTable > tbody > tr:nth-child(3)");
        referenceField.style.border = redBorder;
    }
    if(document.querySelector("#DeliveryMethodList").value === "") {
        let deliveryMethod = document.querySelector("#InvoiceHeaderTable > tbody > tr:nth-child(11)");
        deliveryMethod.style.border = redBorder;
    }
    if(document.querySelector("#DeliveryStreetAddress").value === "") {
        let addressFields = document.querySelector("#DeliveryDetailsTable > tbody");
        addressFields.style.border = redBorder;
    }
})();
