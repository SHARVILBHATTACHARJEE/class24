class Bird {
    constructor(x,y){
        var box_options = {
            restitution:0.8,
            friction:1,
            density: 1.0
        }
        this.body = Bodies.rectangle(x,y,50,50,box_options) 
        World.add(world,this.body)
    }
    display(){
        this.body.position.x=mouseX
        this.body.position.y=mouseY
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("red")
        rect(0,0,50,50) 
        pop()
        
    }
}