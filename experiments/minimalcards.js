(function() {
    let onpageLoad = localStorage.getItem("minimal-cards") || "";
    let element = document.body;
    element.classList.add(onpageLoad);
})();

    function toggleMinimalCards() {
        let element = document.body;
        element.classList.toggle("minimal-cards");

        let option = localStorage.getItem("minimal-cards");
        if (option && option === "minimal-cards") {
            localStorage.setItem("minimal-cards", "");
        } else {
            localStorage.setItem("minimal-cards", "minimal-cards");
        }
}