(function () {
    window.addEventListener("DOMContentLoaded", function () {
        var logValid = document.getElementById("logValid");
        logValid.addEventListener("click", function () {
            var x = {
                a: "test",
                b: 3,
                c: [1, 2, 3],
                d: false,
                e: {
                    a: "hello"
                },
                f: null
            };
            console.log(x);
        });
        var logInvalid = document.getElementById("logInvalid");
        logInvalid.addEventListener("click", function () {
            var y = {
                a: {
                    parent: a
                },
                b: new Date()
            };
            console.log(y);
        });
        var logElement = document.getElementById("logElement");
        logElement.addEventListener("click", function () {
            console.log(document.body);
        });
    });
}
)();