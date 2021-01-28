class Box1 {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':3.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.x=x;
      this.y=y;
      this.visibility = 0

      this.image = loadImage("B3.png")
      World.add(world, this.body);
    }
    display(){
      if (this.body.speed > 5){
        World.remove(world,this.body);
        this.visibility=this.visibility-5
        push()
        boy.addImage(boy1ing); 
        tint(255,this.visibility)
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop()
      }
      else
      {
        
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill ("yellow");
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      //rect(this.x, this.y, this.width, this.height);
      pop();
      }
    }
    score()  {
      if (this.visibility < 0 && this.visibility >-105){
        score = score + 1;
      }
    }
  };