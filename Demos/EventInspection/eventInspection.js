(function init() {
    window.addEventListener("DOMContentLoaded", function onDOMContentLoaded() {
        var hoverZone = document.getElementById("hoverZone");
        hoverZone.addEventListener("mousemove", function hoverZone_onClick() {
            /* do smething */
        
        });
        
        var fetch = document.getElementById("fetch");
        fetch.addEventListener("click", function fetch_onClick() {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "xhr_test.txt", true);
            xhr.onreadystatechange = function xhr_handler() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        var out = document.getElementById("out");
                        var message = "Message recived on " + new Date() + ": " + xhr.responseText;
                        out.textContent = message;
                    }
                }
            };
            xhr.send(null);
        });
        fetch.addEventListener("click", function fetchMistress_onClick() {
            var x = 0;
            x++;            
        });
    });
})();