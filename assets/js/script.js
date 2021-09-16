
$(function () {
	$("#slider").slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 50,
	});
		});


$(function () {
	$("#drag").draggable({ revert: "valid" });
	$("#drop").droppable({
		drop: function (event, ui) {
			$(this)
				.addClass("ui-state-highlight")
				.html("Dropped!");
		}
	});
});

$(function () {
	$( "#stick" ).draggable({ containment: "#joystick", scroll: false });
});
