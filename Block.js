class Block{
    constructor(x,y){

        var options = {
            isStatic : false,
            restitution : 0.5,
            friction: 0.01
        }

        this.body = Bodies.rectangle(x,y,38,45,options);
        World.add(world,this.body);
        this.width = 38;
        this.height = 45;
        
    }
    display(){
 var posX = this.body.position.x;
 var posY = this.body.position.y;
 var angle = this.body.angle;

 push();
 translate(posX, posY);
 rotate(angle);
 rectMode(CENTER);
 rect(0,0, this.width, this.height);
 pop();

    }

}