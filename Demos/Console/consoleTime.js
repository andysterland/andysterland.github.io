(function(){
    
    function busyWork(){
        var result ="";
        
	    for (var i = 0; i < 10; i++) {
	        result += Math.random().toString(36).substring(13);
	    }
        
        return result;
    }
	
	document.addEventListener("DOMContentLoaded", function(){
		var goConsoleTime = document.querySelector("#goConsoleTime");
		goConsoleTime.addEventListener("click", function goConsoleTime_click(){
			console.time("Example");
            
            var result ="";
            for(var i = 0; i < 100; i++){
                result += busyWork();
            }
            
			console.timeEnd("Example");
		});
        
		var goConsoleTimeNested = document.querySelector("#goConsoleTimeNested");
		goConsoleTimeNested.addEventListener("click", function goConsoleTimeNested_click(){
			console.time("Example");
            
            var result ="";
            console.groupCollapsed("BusyLoop");
            for(var i = 0; i < 100; i++){
			    console.time("Loop #"+i);
                result += busyWork();
			    console.timeEnd("Loop #"+i);
            }
            console.groupEnd();
            
			console.timeEnd("Example");
		});
	});

})();