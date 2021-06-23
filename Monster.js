class Monster {
    constructor(x,y){
      var options = {
    isStatic : false,
    restitution : 0.5,
    friction: 0.01
}
this.body = Bodies.rectangle(x,y,80,105,options);
this.width = 80;
this.height = 105;
this.image = loadImage("monster2.png");
World.add(world,this.body);


}
display(){
    var posX = this.body.position.x;
    var posY = this.body.position.x;
    var angle = this.body.angle;
posX = mouseX;
posY = mouseY;

    push();
    translate(posX, posY);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();


    }
}