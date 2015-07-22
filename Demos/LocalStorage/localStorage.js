(function() {
	
	function refreshTable(){
		var html = "";
		var localStorageKeys = Object.keys(window.localStorage);
		for (var i = 0; i < localStorageKeys.length; i++){
			var itemKey = localStorageKeys[i];
			var itemValue = window.localStorage[itemKey];
			
			html += ("<tr><td>"+itemKey+"</td><td>"+itemValue+"</td></tr>");
		}
		$("#tableOfItemsBody").html(html);
	}
	
	$(document).ready(function(){
		$("#addItem").click(function(){
			var itemKey = $("#itemKey").val();
			var itemValue = $("#itemValue").val();
			window.localStorage.setItem(itemKey, itemValue);
			refreshTable();
		});			
	});	
	
	refreshTable();
})();