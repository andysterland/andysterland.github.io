(function(){
		
	document.addEventListener("DOMContentLoaded", function(){
		var goDetected = document.querySelector("#goDetected");
		goDetected.addEventListener("click", function goDetected_click(){
			//var consolePropDescrip = Object.keys(window.console);//
			var consolePropDescrip = Object.getOwnPropertyNames(window.console.__proto__);
			var apiTable = document.querySelector("#apiTable");
			var html = "";
            html += "<thead>" + "\n";
            html += "<tr>" + "\n";
            html += "<th>console API</th>" + "\n";
            html += "<th>detected</th>" + "\n";
            html += "<th>type</th>  " + "\n";  
            html += "<th>read-only</th>  " + "\n";  
            html += "<th>enumerable</th>  " + "\n"; 
            html += "<th>configurable</th>  " + "\n"; 
            html += "<th>writeable</th>  " + "\n"; 
            html += "<th>value</th>  " + "\n"; 
            html += "<th>get</th>  " + "\n"; 
            html += "<th>set</th>  " + "\n"; 
            html += "</tr>" + "\n";  
            html += "</thead>" + "\n";
            html += "<tbody>" + "\n";			
	
			function enumProps(obj) {
				var proto = Object.getPrototypeOf(obj);			
			
				if (proto != null) {
					var properties = Object.getOwnPropertyNames(proto);
					
					consolePropDescrip.forEach(function(key, index){
						var propertyDescriptor = Object.getOwnPropertyDescriptor(window.console, key)
						
						html += "<tr>" + "\n";
						html += "<td>"+key+"</td>" + "\n";
						html += "<td>"+"yes"+"</td>" + "\n";
						html += "<td>"+typeof window.console[key]+"</td>" + "\n";
						html += "<td>"++"</td>" + "\n";
						html += "<td>"++"</td>" + "\n";
						html += "<td>"++"</td>" + "\n";
						html += "<td>"++"</td>" + "\n";
						html += "</tr>" + "\n";
					});
			
					return enumProps(proto);
				}
			}
			enumProps(window.console);
            html += "</tbody>" + "\n";
			apiTable.innerHTML = html;
			apiTable.style.display = "block";
			
			
			var f12Open = document.querySelector("#f12Open");
			if(window.__BROWSERTOOLS_CONSOLE){
				f12Open.innerHTML = "The <strong>F12</strong> console is <strong style='color:green;'>open</strong>."
			} else {				
				f12Open.innerHTML = "The <strong>F12</strong> console is <strong style='color:red;'>closed</strong>."
			}
		});
	});

})();