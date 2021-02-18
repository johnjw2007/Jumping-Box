var canvas;

    var music;

    var surface1;

    var surface2;

    var surface3;

    var surface4;

    var box;

function preload(){

    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite(699, 590, 200, 20);
    surface1.shapeColor = "red";

    surface2 = createSprite(490, 590, 200, 20);
    surface2.shapeColor = "green";

    surface3 = createSprite(281, 590, 200, 20);
    surface3.shapeColor = "yellow";

    surface4 = createSprite(72, 590, 200, 20);
    surface4.shapeColor = "blue";

    box = createSprite(random(20,750));
    box.shapeColor = "white";
    box.velocityX = 4;
    box.velocityY = 5;
        
    

}

function draw() {    

    background(0);
    
   edges = createEdgeSprites();
   
   box.bounceOff(edges);

   if(surface1.isTouching(box)){
    box.shapeColor = "red";
    music.play();
}

if(surface2.isTouching(box)&& box.bounceOff(surface2) ){
    box.shapeColor = "green";
    music.play();
}

if(surface3.isTouching(box)  ){
    box.shapeColor = "yellow";
}

if(surface4.isTouching(box)&& box.bounceOff(surface4) ){
    box.shapeColor = "blue";
}


    

    drawSprites();

}