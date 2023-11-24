/*
    Name: Drey
    File Name: script.js
    Date: 11/23/2023

    test
*/

// MOBILE NAVIGATION MENU (HAMBURGER) FUNCTION

function hamburger() {

    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("dc-brand");
    var icon = document.getElementById("menu-icon");
    
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
        icon.style.color = "black";
        console.log("detected menu block, logo none!");
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
        icon.style.color = "white";
        console.log("detected else!");
    }

    console.log("I'm awake!");
}
