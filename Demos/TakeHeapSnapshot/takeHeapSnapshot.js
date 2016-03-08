(function init() {
    window.addEventListener("DOMContentLoaded", function onDOMContentLoaded() {
        var leak = document.getElementById("leak");
        leak.addEventListener("click", function leak_click() {
            var orphan = document.getElementById("orphan");
            if(!orphan){
                return;
            }
            window.orphan = orphan
            orphan.parentElement.removeChild(orphan);
            // At this point the element is not in the markup tree but is alive
            console.takeHeapSnapshot();
        });

        var take = document.getElementById("take");
        take.addEventListener("click", function take_click() {
            // Proofiling needs to be running to fire
            console.takeHeapSnapshot();

        });
    });
})();