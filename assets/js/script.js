$(document).ready(function() {
	$("#go").click(function() {
		var x = $("#where").val();
		x = "Finding food in " + x + "...";
		$("#text").text(x)
		$("#loading").show();
		window.location.href = "search.html";
	});
 });