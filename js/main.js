$(document).ready(function()
{

	var scale = 1 / (window.devicePixelRatio || 1);
	var content = 'width=device-width, initial-scale=' + scale + ', minimum-scale=' + scale;

	document.querySelector('meta[name="viewport"]').setAttribute('content', content);
	
	//Hexagon loading screen
	var loadtime = 400;
	var fadedelay = 800;
	var fadetime = 900;
	$("#a").delay(200).fadeTo(loadtime, 1, function() {
		$("#b").fadeTo(loadtime, 1, function() {
			$("#c").fadeTo(loadtime, 1, function() {
				$("#e").fadeTo(loadtime, 1, function() {
					$("#d").fadeTo(loadtime, 1, function() {
						$("#f").fadeTo(loadtime, 1, function() {
							$("#title-wrapper").fadeTo(500, 1, function() {
								$("#cover").delay(fadedelay).fadeTo(fadetime, 0, function() {
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