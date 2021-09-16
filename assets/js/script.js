// slider function
$(function () {
	$("#slider").slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 50,
	});
});
// drag and drop function
$(function () {
	$("#drag").draggable({ 
		revert: "valid", 
		// revert: true, 
		// helper: "clone" 
	});
	$("#drop").droppable({
		drop: function (event, ui) {
			$(this)
				.addClass("ui-state-highlight")
				// .html("Dropped!");
				fetch('dataUpdate.php?brick=');
				setTimeout(function() {
					$("#drop").removeClass("ui-state-highlight")
				}, 2000)

		}
	});
});
// joystick function
// $(function () {
// 	$( "#stick" ).draggable({ containment: "#joystick", scroll: false });
// });

var joy = new JoyStick('joyDiv');

var dir = joy.GetDir();

$(function() {
	if (dir != dir)
		fetch('dataUpdate.php?direction=' + direction);
});


fetch('data.json')
.then(response => response.json())
.then(data => {
	console.log(data);
	// document.getElementById("name").value = data.name;
});

function setScore(score) {
	fetch('dataUpdate.php?score=' + score);
}


// not needed anymore

// let gameScore = document.getElementById("score").value;
// console.log("gameScore");

function readData() {
	fetch('data.json')
		.then(response => response.json())
		.then(data => {
			//Increases score on controller
			document.getElementById("score").value = data.player.score;
			// Gets the speed value of the slider
			fetch('dataUpdate.php?speed=' + $( "#slider" ).slider( "value" ));

			// might be wrong like this
			var dir = joy.GetDir();
			fetch('dataUpdate.php?direction=' + dir);
			// console.log(data.player.score);
			// console.log(data.player.speed);
			console.log(data.player.direction);
			setTimeout(readData, 500);
		});
}
readData();