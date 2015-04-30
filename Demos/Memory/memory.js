(function init() {
    window.addEventListener("DOMContentLoaded", function onDOMContentLoaded() {
        var leak = document.getElementById("leak");
        leak.addEventListener("click", function leak_click() {
            window.orphan = document.getElementById("orphan");
            document.body.removeChild(window.orphan);
            // At this point the element is not in the markup tree but is alive
        });

        var take = document.getElementById("take");
        take.addEventListener("click", function take_click() {
            // Proofiling needs to be running to fire
            console.takeHeapSnapshot();

        });
    });
})();