document.addEventListener("DOMContentLoaded", function() {
    // Change text of the home section
    var changeHomeTextButton = document.getElementById("change-home-text");
    changeHomeTextButton.addEventListener("click", function() {
        var homeSection = document.getElementById("home");
        var homeParagraph = homeSection.querySelector("p");
        homeParagraph.textContent = "This text has been changed using JavaScript!";
    });

    // Change background color of the about section
    var changeAboutBgButton = document.getElementById("change-about-bg");
    changeAboutBgButton.addEventListener("click", function() {
        var aboutSection = document.getElementById("about");
        aboutSection.style.backgroundColor = "lightblue";
    });
});
