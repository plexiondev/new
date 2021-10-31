(function() {
    let onpageLoad = localStorage.getItem("helvetica-font") || "";
    let element = document.body;
    element.classList.add(onpageLoad);
})();

    function toggleHelveticaFont() {
        let element = document.body;
        element.classList.toggle("helvetica-font");

        let option = localStorage.getItem("helvetica-font");
        if (option && option === "helvetica-font") {
            localStorage.setItem("helvetica-font", "");
        } else {
            localStorage.setItem("helvetica-font", "helvetica-font");
        }
}