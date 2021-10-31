(function() {
    let onpageLoad = localStorage.getItem("light") || "";
    let element = document.body;
    element.classList.add(onpageLoad);
})();

    function toggleLightTheme() {
        let element = document.body;
        element.classList.toggle("light");

        let option = localStorage.getItem("light");
        if (option && option === "light") {
            localStorage.setItem("light", "");
        } else {
            localStorage.setItem("light", "light");
        }
}