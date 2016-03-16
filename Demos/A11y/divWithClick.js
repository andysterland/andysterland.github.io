(function(){
    
    window.addEventListener("DOMContentLoaded", function(){
        var clickMe = document.getElementById("clickMe");
        clickMe.addEventListener("click", function(){
           var out = document.getElementById("out");
           out.textContent = "It was clicked!"; 
        });
        var clickMe2 = document.getElementById("clickMe2");
        clickMe2.addEventListener("click", function(){
           var out = document.getElementById("out");
           out.textContent = "Thing 2 was clicked!"; 
        });
    });    
    
})();