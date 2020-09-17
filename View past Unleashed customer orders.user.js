// ==UserScript==
// @name         View past Unleashed customer orders
// @namespace    https://au.unleashedsoftware.com
// @version      0.1
// @description  Provide a quick way to see a customer's past orders, sorted by product.
// @author       Mathias Foster
// @match        https://au.unleashedsoftware.com/v2/Customer/Update/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("tampermonkey active");
    let customerID = window.location.href.slice(window.location.href.lastIndexOf("/") + 1, window.location.href.length);
    let customerCode = document.querySelector('#CustomerCodeDisplay').innerText;
    customerCode = customerCode.replace(" ", "+");
    let dayDate = new Date().getDate().toString();
    dayDate = dayDate.padStart(2, "0");
    let monthDate = new Date().getMonth() + 1;
    monthDate = monthDate.toString().padStart(2, "0");
    let yearDate = new Date().getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthFull = monthNames[new Date().getMonth()];
    let lastYearMonthFull = monthNames[new Date().getMonth() + 1];
    let reportURL = "https://au.unleashedsoftware.com/v2/Enquiry/UnitSalesEnquiry#customerId=" + customerID.toString() + ",start=" + lastYearMonthFull.toString() + "+" + (yearDate - 1).toString() + ",end=" + monthFull.toString() + "+" + yearDate.toString() + ",customerCode=" + customerCode + ",includingCredits=true";
    console.log(reportURL);
    let buttonContainer = document.querySelector('.buttons');
    let orderButton = document.createElement('a');
    orderButton.classList.add('fm-button');
    orderButton.href = reportURL;
    orderButton.innerText = "View Products";
    buttonContainer.firstElementChild.insertAdjacentElement('beforebegin', orderButton);
    console.log(orderButton);
})();