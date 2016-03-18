(function () {
    function isPrime(numberToTest) {
        var testResult = true;
        if (numberToTest == 1 || numberToTest == 2) {
            testResult = true;
        }

        // Loop that runs through every number except 1 and the test number
        // As a modulus of 0 for this is expected... 
        for (var i = numberToTest - 1; i > 1; i--) {
            // Ooops what a mistake to make
            if (numberToTest % i == 1) {
                testResult = false;
            }
        }

        return testResult;
    }

    function getRandomWholeNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    document.addEventListener("DOMContentLoaded", function(){
        var traceThis = document.getElementById("traceThis");
        traceThis.addEventListener("click", function () {
            // Add console logging without modifying code
            var randNum = getRandomWholeNumber(0, 100);

            var result = isPrime(randNum);
            
            var out = document.getElementById("out");
            out.textContent = randNum + " is" + (result)?" ":" not " + "a prime number."
        });
        
        var hoverZone = document.getElementById("hoverZone");
        hoverZone.addEventListener("mousemove", function hoverZone_onClick() {
            /* do smething */
            // "(%i, %i)", arguments[0].x, arguments[0].y 
        });
    });
})();