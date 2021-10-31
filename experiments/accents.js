(function() {
    let onpageLoad = localStorage.getItem("classic-accents") || "";
    let element = document.body;
    element.classList.add(onpageLoad);
})();

    function toggleClassicAccents() {
        let element = document.body;
        element.classList.toggle("classic-accents");

        let option = localStorage.getItem("classic-accents");
        if (option && option === "classic-accents") {
            localStorage.setItem("classic-accents", "");
        } else {
            localStorage.setItem("classic-accents", "classic-accents");
        }
}