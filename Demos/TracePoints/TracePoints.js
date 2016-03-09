(function () {
    function isPrime(numberToTest) {
        var testResult;
        if (numberToTest == 1 || numberToTest == 2) {
            testResult = true;
        }

        for (var i = numberToTest - 1; i > 1; i--) {
            if (numberToTest % i == 1) {
                // Ooops what a mistake to make
                testResult = true;
                break;
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

            isPrime(randNum);
        });
    });
})();