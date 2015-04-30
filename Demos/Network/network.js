(function init() {
    window.addEventListener("DOMContentLoaded", function onDOMContentLoaded() {
        var fetch = document.getElementById("fetch");
        fetch.addEventListener("click", function fetch_onClick() {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "data.json", true);
            xhr.onreadystatechange = function xhr_handler() {
                
            };
            xhr.send(null);
        });
    });
})();

