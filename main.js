canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_image_X = 10;
greencar_image_Y = 10;
greencar_image_height = 150;
greencar_image_width = 110;



function add() {
	background_imgtag = new Image();
	background_imgtag.onload=uploadBackground;
	background_imgtag.src=background_image;

	greencar_imgtag = new Image();
	greencar_imgtag.onload=uploadgreencar;
	greencar_imgtag.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height)

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgtag,greencar_image_X,greencar_image_Y,greencar_image_width,greencar_image_height)


	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_image_Y >= 0)
	{
		greencar_image_Y = greencar_image_Y - 10;
		uploadBackground();
		uploadgreencar();
	}
}
function down()
{
	if(greencar_image_Y <= 600)
	{
		greencar_image_Y = greencar_image_Y + 10;
		uploadBackground();
		uploadgreencar();
	}
}
function left()
{
	if(greencar_image_X >= 0)
	{
		greencar_image_X = greencar_image_X - 10;
		uploadBackground();
		uploadgreencar();
	}
}
function right()
{
	if(greencar_image_X <= 1000)
	{
		greencar_image_X = greencar_image_X + 10;
		uploadBackground();
		uploadgreencar();
	}
}

