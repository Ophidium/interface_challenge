
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

fetch('data.json')
.then(response => response.json())
.then(data => {
	console.log(data);
	// document.getElementById("name").value = data.name;
});

function setScore(score) {
	fetch('dataUpdate.php?score=' + score);
}

let gameScore = document.getElementById("score").value;
// console.log("gameScore");

function readData() {
	fetch('data.json')
		.then(response => response.json())
		.then(data => {
			//set the position and name of the car
			document.getElementById("score").value = data.player.score;
			// console.log(data.player.score);
			setTimeout(readData, 500);
		});
}
readData();