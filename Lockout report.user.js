// ==UserScript==
// @name         Lockout report
// @namespace    https://gwg.nz
// @version      0.1.6
// @description  Export JSON of lockout report
// @author       Mathias Foster
// @match        file:///C:/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (document.querySelector("body > table > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(2) > span").innerText === "Smart Start, Inc. - Separating Drinking from Driving") {
        let images = document.querySelectorAll("img");

        for (var i in images) {
            if (images[i].parentElement) {
                images[i].parentElement.removeChild(images[i]);
            }
        }

        let clientNames = [],
            installDates = [],
            lockoutDates = [],
            addresses = [],
            tags = [],
            driversLicences = [];

        let elements = document.querySelectorAll(
            "body > table > tbody > tr > td:nth-child(2) > table > tbody > tr > td > span"
        );

        for (var k in elements) {
            if (elements[k].innerText === "Client:") {
                clientNames.push(
                    elements[k].parentElement.nextElementSibling.nextElementSibling.innerText
                );
            } else if (elements[k].innerText === "Install Date:") {
                installDates.push(
                    elements[k].parentElement.nextElementSibling.nextElementSibling.innerText
                );
            } else if (elements[k].innerText === "In Lockout Since:") {
                lockoutDates.push(
                    elements[k].parentElement.nextElementSibling.nextElementSibling.innerText
                );
            } else if (elements[k].innerText === "Address:") {
                addresses.push(
                    elements[k].parentElement.nextElementSibling.nextElementSibling.innerText
                );
            } else if (elements[k].innerText === "Tag:") {
                tags.push(
                    elements[k].parentElement.nextElementSibling.nextElementSibling.innerText
                );
            } else if (elements[k].innerText === "DL#:") {
                driversLicences.push(
                    elements[k].parentElement.nextElementSibling.nextElementSibling.innerText
                );
            }
        }

        let clientInformation = [];

        for (var j in clientNames) {
            clientInformation.push({
                name: clientNames[j],
                installDate: installDates[j],
                lockoutDate: lockoutDates[j],
                address: addresses[j],
                tag: tags[j],
                driversLicence: driversLicences[j]
            });
        }

        console.log(JSON.stringify(clientInformation));

        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            if (req.readyState == XMLHttpRequest.DONE) {
                console.log(req.responseText);
            }
        };

        req.open("POST", "https://ss-lockout-report.glitch.me/new", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify(clientInformation));
    }

})();
