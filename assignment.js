/*function setup() {
	let cols = 10;
	let rows = 10;
	let boxes = [];
	createCanvas(300, 300);
	for(let i = 0; i < cols; i++) {
		for(let j = 0; j < rows; j++){
			boxes[i][j] = random(255);
		}
	}
}

function draw() {
	background(51);
	let cols = 10;
	let rows = 10;
	for(let i = 0; i < cols; i++) {
		for(let j = 0; j < rows; j++) {
			let x = i * 30;
			let y = j * 30;

			fill(boxes[i][j]);
			storke(0);
			rect(x,y,30,30);
		}
	}
}*/
$(document).ready(function(){
	initTiles();
	rotateTiles();
})

function initTiles() {
	let col = 5;
	let row = 5;
	let flipCard = document.createElement("div");
	flipCard.className = "flipCard";
	flipCard.id = "cardBox";
	let flipCardInner = [];
	//let flipCardFront = [];
	//let flipCardBack = [];
	for(let i = 0; i < col; i++) {
		flipCardInner[i] = [];
		//flipCardFront[i] = [];
		//flipCardBack[i] = [];
		//console.log(flipCardFront);
		//console.log(flipCardBack);
		for(let j = 0; j < row; j++) {
			flipCardInner[i][j] = document.createElement("div");
			//flipCardFront[i][j] = document.createElement("div");
			//flipCardBack[i][j] = document.createElement("div");
			flipCardInner[i][j].className = "flipCardInner";
			//flipCardFront[i][j].className = "front";
			//flipCardBack[i][j].className = "back";
			flipCardInner[i][j].id = Math.random();
			flipCardInner[i][j].onclick = function() {
				flipCardInner[i][j].classList.add("frontToggle");
			}
			//flipCardFront[i][j].id = Math.random();
			//flipCardBack[i][j].id = Math.random();
			//flipCardInner[i][j].appendChild(flipCardFront[i][j]);
			//flipCardInner[i][j].appendChild(flipCardBack[i][j]);
			flipCard.appendChild(flipCardInner[i][j]);
		}
	}
	document.body.appendChild(flipCard);
	flipATile(flipCardInner);

	//flipBackATile(flipCardInner);
	/*setTimeout(	flipATile(flipCardInner), 3000);*/
	/*firstFlipTiles(flipCardInner);*/

}

function flipATile(array) {
	let flippingTiles = [];
	for(let i = 0; i < array.length; i++) {
		for(let j = 0; j < array.length; j++) {
			flippingTiles.push(array[i][j]);
			flippingTiles[i].id = i;
		}
	}

	/*for (let i = 0; i < array.length; i++) {
		//change array.length at [][].
		flippingTiles.push(array[Math.floor(Math.random() * array.length)][Math.floor(Math.random() * array.length)]);

	}*/

	//let first = flippingTiles[0];
	/*first.onclick = function() {
		first.classList.toggle("frontToggle");
	}*/
	/*setTimeout(function(){
		first.classList.add("frontToggle");
		first.offsetWidth = first.offsetWidth;
		first.classList.remove("frontToggle");
	}, 1000);*/

	for(let k = 0; k < flippingTiles.length; k++) {
		let randomlySelectedTile = flippingTiles[Math.floor(Math.random() * flippingTiles.length)];
		setTimeout(function(){randomlySelectedTile.classList.add("frontToggle")}, 1000);
		setTimeout(function(){randomlySelectedTile.classList.remove("frontToggle")}, 2000);
	}
	/*setTimeout(function(){first.classList.add("frontToggle")}, 1000);
	setTimeout(function(){first.classList.remove("frontToggle")}, 2000);*/



	//first.classList.add("frontToggle");

	//console.log(first);

}

/*function flipBackATile(array) {
	let flippingTiles = [];
	for(let i = 0; i < array.length; i++) {
		for(let j = 0; j < array.length; j++) {
			flippingTiles.push(array[i][j]);
		}
	}

	let first = flippingTiles[0];
	first.onclick = function() {
		first.classList.toggle("frontToggle");
	}
	setTimeout(function(){first.classList.remove("frontToggle")}, 2000);
	//setTimeout(function(){first.classList.add("front")}, 1000);


	//first.classList.add("frontToggle");

	console.log(first);
}*/

function flipOnClick(array) {
	let flippingTiles = [];
	let clickedTileList = [];
	for(let i = 0; i < array.length; i++) {
		for(let j = 0; j < array.length; j++) {
			flippingTiles.push(array[i][j]);
			flippingTiles[i].id = i;
		}
	}

	let clickedTile = document.getElementById()
}

function flipBunchTiles() {

}

/*function firstFlipTiles(array) {
	let flippingTiles = [];
	console.log(array[0][0]);
	$(array[0][0].id).flip();
		
	setTimeout(function(){
		for (let i = 0; i < 6; i++) {
			//change array.length at [][].
			flippingTiles.push(array[Math.floor(Math.random() * array.length)][Math.floor(Math.random() * array.length)]);

		}

		console.log(flippingTiles);

		for(let j = 0; j < flippingTiles.length; j++) {
			console.log(flippingTiles[j]);
			console.log(flippingTiles[j].id);
			console.log($(flippingTiles[j].id));
			$(flippingTiles[j].id).flip();
		}
	}, 1000)
}*/

function rotateTiles() {
	let cardBox = document.getElementById("cardBox");
	setTimeout(function(){
		cardBox.style.WebkitTransitionDuration = '1s';
		cardBox.style.WebkitTransform = 'rotate(90deg)';
	}, 3000);
}