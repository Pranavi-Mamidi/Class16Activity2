
var box1;

function setup() {
  createCanvas(600, 400);
  box1=new Box()
  box2=new Box()
  box3=new Box()
}

function draw() {
  background(220);
  fill ("purple")
  box1.show()
  box1.moveup(1)
  fill ("pink")
  box2.show()
  box2.moveup(3)
  fill ("blue")
  box3.show()
  box3.moveup(5)

}

