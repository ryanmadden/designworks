$(document).ready(function()
{
	$("#a").fadeTo(500, 1, function() {
		$("#b").fadeTo(500, 1, function() {
			$("#c").fadeTo(500, 1, function() {
				$("#e").fadeTo(500, 1, function() {
					$("#d").fadeTo(500, 1, function() {
						$("#f").fadeTo(500, 1, function() {
							$("#title-wrapper").fadeTo(500, 1, function() {
								$("#cover").fadeTo(800, 0, function() {
										$("#cover").css("display", "none");
	});
	});
	});
	});
	});
	});
	});
	});
	$("#gallery img").click(function()
	{
		$("#modal-img").attr("src", $(this).attr('src'));
		$('#zoomModal').modal('show');
	});
})