(function() {
	
	function refreshTable(){
		var tableOfItems = $("#tableOfItems");
		var localStorageKeys = Object.keys(window.localStorage);
		for (var i = 0; i < localStorageKeys.length; i++){
			var itemKey = localStorageKeys[i];
			var itemValue = window.localStorage[itemKey];
			
			$("#myTable > tbody:last-child").append("<tr>"+itemKey+"</tr><tr>"+itemValue+"</tr>");
		}
	}
	
	$(document).ready(function(){
		$("#addItem").click(function(){
			var itemKey = $("#itemKey").val();
			var itemValue = $("#itemValue").val();
			window.localStorage.setItem(itemKey, itemValue);
		});			
	});	
})();