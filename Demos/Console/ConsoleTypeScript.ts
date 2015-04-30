class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        console.log(this.getMOTD());
    }
    getMOTD(){
        return this.greeting;   
    }
}

(function(){
    document.addEventListener("DOMContentLoaded", () => {
        var greeter = new Greeter("Hello world, from TypeScript!");

        var goSourcemaps = document.querySelector("#goSourcemaps");
        goSourcemaps.addEventListener("click", () => {
            greeter.greet();
        } );
    });
})();
