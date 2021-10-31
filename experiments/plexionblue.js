(function() {
    let onpageLoad = localStorage.getItem("plexion-blue") || "";
    let element = document.body;
    element.classList.add(onpageLoad);
})();

    function toggleplexionBlue() {
        let element = document.body;
        element.classList.toggle("plexion-blue");

        let option = localStorage.getItem("plexion-blue");
        if (option && option === "plexion-blue") {
            localStorage.setItem("plexion-blue", "");
        } else {
            localStorage.setItem("plexion-blue", "plexion-blue");
        }
}