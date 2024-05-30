// ==UserScript==
// @name         Unleashed one click select
// @namespace    https://gwg.nz
// @version      0.01
// @description  Select order numbers, PO numbers, etc with one click
// @author       You
// @match        https://au.unleashedsoftware.com/v2/SalesOrder/Update/*
// @match        https://au.unleashedsoftware.com/v2/PurchaseOrder/Update/*
// @match        https://au.unleashedsoftware.com/v2/Production/Assembly/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=unleashedsoftware.com
// @grant        none
// ==/UserScript==

let salesOrderNumber = document.querySelector("#OrderNumberDisplay");
salesOrderNumber.style="user-select: all;"

let purchaseOrderNumber = document.querySelector("#OrderNumberDisplay");
purchaseOrderNumber.style="user-select: all;"

let assemblyNumber = document.querySelector("#AssemblyNumberDisplay");
assemblyNumber.style="user-select: all;"
