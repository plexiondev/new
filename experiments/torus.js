(function() {
    let onpageLoad = localStorage.getItem("torus-font") || "";
    let element = document.body;
    element.classList.add(onpageLoad);
})();

    function toggleTorusFont() {
        let element = document.body;
        element.classList.toggle("torus-font");

        let option = localStorage.getItem("torus-font");
        if (option && option === "torus-font") {
            localStorage.setItem("torus-font", "");
        } else {
            localStorage.setItem("torus-font", "torus-font");
        }
}