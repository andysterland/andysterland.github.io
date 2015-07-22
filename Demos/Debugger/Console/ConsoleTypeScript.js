var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        console.log(this.getMOTD());
    };
    Greeter.prototype.getMOTD = function () {
        return this.greeting;
    };
    return Greeter;
})();

(function () {
    document.addEventListener("DOMContentLoaded", function () {
        var greeter = new Greeter("Hello world, from TypeScript!");

        var goSourcemaps = document.querySelector("#goSourcemaps");
        goSourcemaps.addEventListener("click", function () {
            greeter.greet();
        });
    });
})();
//# sourceMappingURL=ConsoleTypeScript.js.map
