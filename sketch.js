
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint= Matter.Constraint;

var score = 0;

function preload()
{ 
	boy1ing=loadImage('c2.png');
	boyimg=loadImage('c1.png');
	getBackgroundImg()
	backGround=loadImage('egypt.jpg')
}
function setup() {
	createCanvas(1350, 500);

	engine = Engine.create();
	world = engine.world;

	ground2 = new Ground(985,400,400,10);

	lGround = new Ground(0,500,3000,30);
	
	boy=createSprite(550,385,80,40);
	boy.addImage(boyimg) 
	boy.scale=0.2

    box1 = new Box(870,395,60,40);

	box2 = new Box1(1130,395,60,40);
	box3 = new Box1(920,395,60,40);
	box4 = new Box(865,330,60,40);

	box5 = new Box(1050,395,60,40);
	box6 = new Box1(950,395,60,40);
	box7 = new Box(1000,395,60,40);
	box8 = new Box1(930,330,60,40);
	box9 = new Box(980,330,60,40);

	box10 = new Box(1040,330,60,40);
	box11 = new Box1(1100,330,60,40);
	box12 = new Box(895,280,60,40);
	box13 = new Box1(955,280,60,40);
	box14 = new Box(1015,280,60,40);
	box15 = new Box1(1075,280,60,40);
    box16 = new Box1(925,240,60,40);
    
	box17 = new Box(985,240,60,40);

	box18 = new Box(1045,240,60,40);
	box19 = new Box(955,190,60,40);
	box20 = new Box(1015,190,60,40);

	box21 = new Box(985,140,60,40);

	poly = new Polygon(100,100,50,40);

	sling = new Chain(poly.body,{x:200,y:100});

	Engine.run(engine);
}


function draw() {
	if(backGround) {
		background(backGround);
	}
	fill('yellow')
	textSize(18);
	text ('Drag the golden stone to hit the pyramid.',10,175); 

	textSize("20");
	fill('yellow')
	text("SCORE :" +score,500,70);
	
	
	box1.display();

	box2.display();
	box3.display();
	box4.display();

	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();

	box10.display();
	box11.display();
	box12.display();
	box13.display();
	box14.display();
	box15.display();
	box16.display();

	box17.display();

	box18.display();
	box19.display();
	box20.display();

	box21.display();
	

	box1.score();
	box2.score();
	box3.score();
	box4.score();
	box5.score();
	box6.score();
	box7.score();
	box8.score();
	box9.score();
	box10.score();
	box11.score();
	box12.score();
	box13.score();
	box14.score();
	box15.score();
	box16.score();
	box17.score();
	box18.score();
	box19.score();
	box20.score();
	box21.score();
	
	ground2.display();
	lGround.display();
   
	poly.display();

	sling.display();
	
	drawSprites();

}
function mouseDragged()
{
    Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  sling.released();
}
function keyPressed()
{
	if(keyCode == 32)
	{
			Matter.Body.setPosition(poly.body,{x:100,y:400});
			sling.attach(poly.body);
	}
}
async function getBackgroundImg(){
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json();

    var datetime = responseJSON.currentDateTime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=18){
        bg = "egypt.jpg";
    }
    else{
        bg = "egypt.jpg";
    }

    backGround = loadImage(bg);
}
