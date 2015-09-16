(function(){
	
	document.addEventListener("DOMContentLoaded", function(){
		var goDetected = document.querySelector("#goDetected");
		goDetected.addEventListener("click", function goDetected_click(){
			var consolePropDescrip = Object.getOwnPropertyNames(window.console);
			
			var apiTable = document.querySelector("#apiTable");
			var html = "";
            html += "<thead>" + "\n";
            html += "<tr>" + "\n";
            html += "<th>console API</th>" + "\n";
            html += "<th>detected</th>" + "\n";
            html += "<th>type</th>  " + "\n";  
            html += "</tr>" + "\n";  
            html += "</thead>" + "\n";
            html += "<tbody>" + "\n";
			consolePropDescrip.forEach(function(key, index){
				html += "<tr>" + "\n";
				html += "<td>"+key+"</td>" + "\n";
				html += "<td>"+"yes"+"</td>" + "\n";
				html += "<td>"+typeof window.console[key]+"</td>" + "\n";
				html += "</tr>" + "\n";
			});
            html += "</tbody>" + "\n";
			apiTable.innerHTML = html;
			apiTable.style.display = "block";
			
			
			var f12Open = document.querySelector("#f12Open");
			if(window.__BROWSERTOOLS_CONSOLE){
				f12Open.innerHTML = "The <strong>F12</strong> console is <strong style='green'>open</strong>."
			} else {				
				f12Open.innerHTML = "The <strong>F12</strong> console is <strong style='red'>closed</strong>."
			}
		});
	});

})();