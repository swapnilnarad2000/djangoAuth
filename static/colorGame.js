var numColor=6;
var colors = pickRandomColors(numColor);
var squares =document.querySelectorAll(".square");
var pickedColor=colors[pickRandom()];
var colorDisplay=document.getElementById("colorDisplay");
var statusDisplay=document.querySelector("#status");
var CorrectH1=document.querySelector("h1");
var NewColor=document.querySelector("#NewColor");
var  easyBut=document.querySelector("#Easy");
var hardBut=document.querySelector("#Hard");
colorDisplay.textContent=pickedColor;
easyBut.addEventListener("click",function(){
	CorrectH1.style.backgroundColor="steelblue";
	this.classList.add("selected");
	hardBut.classList.remove("selected");
	numColor=3;
	colors=pickRandomColors(numColor);
	pickedColor=colors[pickRandom()];
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];	
		}
		else{
			squares[i].style.display="none";
		}
	}
});

hardBut.addEventListener("click",function(){
	CorrectH1.style.backgroundColor="steelblue";
	this.classList.add("selected");
	easyBut.classList.remove("selected");
	numColor=6;
	colors = pickRandomColors(numColor);
	pickedColor=colors[pickRandom()];
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
})


NewColor.addEventListener("click",function(){
	NewColor.textContent="New Colors";
	CorrectH1.style.backgroundColor="steelblue";
	colors = pickRandomColors(numColor);
	pickedColor=colors[pickRandom()];
	colorDisplay.textContent=pickedColor; 
	statusDisplay.textContent="";
	for(i=0;i<squares.length;i++){
	//added initial colours to squares
	squares[i].style.backgroundColor=colors[i];
	}
}) 
for(i=0;i<squares.length;i++){
	//added initial colours to squares
	squares[i].style.backgroundColor=colors[i];

	//add click
	squares[i].addEventListener("click",function(){
		//alert("clicked");
		//grab color of click ed square
		//alert(this.style.backgroundColor);
		var clickedColor=this.style.backgroundColor;
		if(clickedColor ===  pickedColor){
			//alert("correct");
			statusDisplay.textContent="Correct!!!";
			//console.log(status.textContent);
			colorChange();
			CorrectH1.style.backgroundColor=pickedColor;
			NewColor.textContent="Play Again";

		}
		else{
			this.style.backgroundColor="#232323";
			statusDisplay.textContent="Try Again!!!";
			//console.log(statusDisplay.textContent);
			//alert("wrong");
		}
	});
}

function colorChange() {
	// body...
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=pickedColor;
	}
}

function pickRandom(){
	var random=Math.floor(Math.random()*colors.length);
	return random;
}

function pickRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	r=Math.floor(Math.random()*256);
	g=Math.floor(Math.random()*256);
	b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}