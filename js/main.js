$(document).ready(function()
{
	$("#a").fadeTo(500, 1, function() {
		$("#b").fadeTo(500, 1, function() {
			$("#c").fadeTo(500, 1, function() {
				$("#e").fadeTo(500, 1, function() {
					$("#d").fadeTo(500, 1, function() {
						$("#f").fadeTo(500, 1, function() {
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