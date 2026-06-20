console.log("Dinosaur Runner Game - Stage 2");

class DinoGame{
	constructor(){
		this.canvas = document.getElementById("gameCanvas");
		this.ctx = this.canvas.getContext("2d");
		this.scoreElement = document.getElementById("score");
		this.statusElement = document.getElementByID("gameStatue");

		//game state
		this.gameState="waiting";
		this.score = 0;
		this.gameSpeed = 2;
		
		//Dino properties
		this.dino={
			x:50,
			y:150,
			width:40,
			height:40,
			velocityY:0,
			isJumping:false,
			groundY:150,
		};
		//Physics
		this.gravity = 0.6;
		this.jumpStrength = -12;
		//Ground
		this.init();
	}
	
	init(){
		this.setupEventListenners();
		this.gameLoop();
		this.updateStatus("Click to Start!");
	}
}
