(function(){
	
	document.addEventListener("DOMContentLoaded", function(){
		var goMessages = document.querySelector("#goMessages");
		goMessages.addEventListener("click", function goMessages_click(){
			console.log("Hello!");
			console.log("You can also click on any URL now www.example.com.")
		});
	});

})();