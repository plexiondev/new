(function() {
    let onpageLoad = localStorage.getItem("exo-font") || "";
    let element = document.body;
    element.classList.add(onpageLoad);
})();

function setExoOff() {
    let element = document.body;
        element.classList.remove("exo-all");
        element.classList.remove("exo-header");

        localStorage.setItem("exo-font", "");
}

function setExoAll() {
    let element = document.body;
        element.classList.add("exo-all");
        element.classList.remove("exo-header");

        localStorage.setItem("exo-font", "exo-all");
}

function setExoHeader() {
    let element = document.body;
        element.classList.add("exo-header");
        element.classList.remove("exo-all");

        localStorage.setItem("exo-font", "exo-header");
}