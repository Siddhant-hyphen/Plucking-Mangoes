class Stone{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.3
    }
    this.body = Bodies.circle(x, y,r,options);
    this.image = loadImage("stone.png");
    World.add(world, this.body);
    this.r = r
}
display(){
    var stonePos = this.body.position
    push()
    translate(this.body.position.x, this.body.position.y)
    rotate(this.body.angle)
    imageMode(CENTER)
    image(this.image,0,0,this.r,this.r)
    pop()
}

}