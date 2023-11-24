/*
    Name: Drey
    File Name: script.js
    Date: 11/23/2023
*/

// MOBILE NAVIGATION MENU (HAMBURGER) FUNCTION

function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("dc-brand");

    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display == "none";
        logo.style-display == "block";
    } else {
        menu.style.display == "block";
        logo.style.diesplay == "none";
    }
}