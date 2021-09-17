class Game
{
	constructor() {
		// verbinden met de pongame-canvas (moet iderere frame opnieuw getekend worden)
		this.canvas = document.getElementById('tank');
		this.context = this.canvas.getContext('2d');

		// ball-object maken
		this.ball = new Ball(this.canvas.width/2, this.canvas.height/2, "orange");

		this.player = [
			new Player(20, this.canvas.height/2, 1),
			new Player(this.canvas.width-20, this.canvas.height/2, 2)
		]

		this.hud = new Hud(this);

		// Gameloop
		let lastTime;
		const callback = (milliseconds) => {
			if(lastTime) {
			this.update( (milliseconds - lastTime) / 1000);
			this.draw();
			}
			lastTime = milliseconds;
			window.requestAnimationFrame(callback);
		}

		callback();
	}

	
	checkinput(player, ball) {


		switch(player.id) {
			case 1:
				player.velocity.y = 0;
				player.velocity.y = (this.keys[38]===true) ? -400 : 0;
				player.velocity.y = (this.keys[40]===true) ? 400 : 0;
			break;
			case 2:
				player.position.y = ball.position.y;
			break;

		}
	}


	// readData() {
	// 	fetch('data.json')
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			var vel = data.player.speed;
	// 			var dir = data.player.direction;
	// 			console.log(data.player.direction);
	// 			if (dir == "C") {
	// 				this.ball.velocity.x = 0;
	// 				this.ball.velocity.y = 0;
	// 			}
	// 			if (dir == "E") {
	// 				this.ball.velocity.x = vel;
	// 				this.ball.velocity.y = 0;
	// 			}
	// 			if (dir == "W") {
	// 				this.ball.velocity.x = -vel;
	// 				this.ball.velocity.y = 0;
	// 			}
	// 			if (dir == "N") {
	// 				this.ball.velocity.x = 0;
	// 				this.ball.velocity.y = -vel;
	// 			}
	// 			if (dir == "S") {
	// 				this.ball.velocity.x = 0;
	// 				this.ball.velocity.y = vel;
	// 			}
	// 			// setTimeout(readData, 500);
	// 		});
	// }


	update(deltatime) {
		fetch('data.json')
			.then(response => response.json())
			.then(data => {
				var vel = data.player.speed;
				var dir = data.player.direction;
				console.log(dir, vel);
				if (dir == "C") {
					this.ball.velocity.x = 0;
					this.ball.velocity.y = 0;
				}
				if (dir == "E") {
					this.ball.velocity.x = vel;
					this.ball.velocity.y = 0;
				}
				if (dir == "W") {
					this.ball.velocity.x = -vel;
					this.ball.velocity.y = 0;
				}
				if (dir == "N") {
					this.ball.velocity.x = 0;
					this.ball.velocity.y = -vel;
				}
				if (dir == "S") {
					this.ball.velocity.x = 0;
					this.ball.velocity.y = vel;
				}
				if (dir == "NE") {
					this.ball.velocity.x = vel;
					this.ball.velocity.y = -vel;
				}
				if (dir == "SE") {
					this.ball.velocity.x = vel;
					this.ball.velocity.y = vel;
				}
				if (dir == "NW") {
					this.ball.velocity.x = -vel;
					this.ball.velocity.y = -vel;
				}
				if (dir == "SW") {
					this.ball.velocity.x = -vel;
					this.ball.velocity.y = vel;
				}
				// setTimeout(readData, 500);
			});
		this.ball.position.x += this.ball.velocity.x * deltatime;
		this.ball.position.y += this.ball.velocity.y * deltatime;

		if (this.ball.bottom > this.canvas.height-10 || this.ball.top < 10) {
			this.ball.velocity.y = -this.ball.velocity.y;
		}
		if (this.ball.right > this.canvas.width || this.ball.left < 0) {
			this.ball.velocity.x = -this.ball.velocity.x;
		}
	}



	draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		// Tekenen van rectangl
		this.drawRectangle(this.context, this.ball)
	}

	drawRectangle(ctx, rect, color='white') {
		ctx.fillStyle = color;
		ctx.fillRect(rect.left, rect.top, rect.size.x, rect.size.y);
	}
}