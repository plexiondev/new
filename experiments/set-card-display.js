(function() {
    let onpageLoad = localStorage.getItem("card-display") || "";
    let element = document.body;
    element.classList.add(onpageLoad);
})();

function setCardsDefault() {
    let element = document.body;
        element.classList.remove("minimal-cards");

        localStorage.setItem("card-display", "");
}

function setCardsMinimal() {
    let element = document.body;
        element.classList.add("minimal-cards");

        localStorage.setItem("card-display", "minimal-cards");
}