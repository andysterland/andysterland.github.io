(function(){
	function goMath(){
		var timeTakenEl = document.querySelector("#timeTaken");
		var resultListEl = document.querySelector("#resultList");

		var timeStarted = performance.now();
		var n = 1000000;

		performance.mark("calcIterative-Begin");
		calcIterative(n);
		performance.mark("calcIterative-End");
		performance.measure("Iteration based calculation", "calcIterative-Begin",  "calcIterative-End");

		performance.mark("calcInLoop-Begin");
		calcInLoop(n);
		performance.mark("calcInLoop-End");
		performance.measure("Recursion based calculation", "calcInLoop-Begin",  "calcInLoop-End");

		var timeTaken = (performance.now() - timeStarted).toFixed(2);
		timeTaken = timeTaken.toString();
		timeTaken = timeTaken.replace(/\d(?=(\d{3})+\.)/g, '$&,');
		timeTakenEl.textContent =  timeTaken;

		resultListEl.innerHTML =  "<li>"+timeTaken+"ms</li>" + resultListEl.innerHTML ;
	}

	function calcIterative(n){
        var x = "";
	    for (var i = 0; i < n; i++) {
	        x = Math.random().toString(36).substring(13);
	    }
	    return x;
	}

	function calcInLoop(n){
      	var x = "";
	    for (var i = 0; i < n; i++) {
	    	 x = calcInLoopInner();
	    }
	    return x;
	}

	function calcInLoopInner(){
		var out;
		out = Math.random().toString(36).substring(13);
        return out;
	}

	document.addEventListener("DOMContentLoaded", function(){
		var goEl = document.querySelector("#go");
		goEl.addEventListener("click", goMath);

	});
})();