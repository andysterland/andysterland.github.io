// Imagine this file is a library file you don't wish to debug

window.magic = {

	getNumber: function(){
		// crazy code
		var now = new Date();
 		var ms = now.getMilliseconds(); 
		var loopLength = Math.floor((Math.random()*ms)+10);
		var number = 0;

		for(var i = 0; i < loopLength; i++){
			number = Math.floor((Math.random()*1000)+1); 
		}

		return number;
	}

};