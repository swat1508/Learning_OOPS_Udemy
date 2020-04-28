//inheritance using class

class Shape{
    move(){
        console.log('move !!!');
    }
}

class Circle extends Shape{
    draw(){
        console.log('draw');
    }
}

const c = new Circle();
c.draw();  //draw
c.move();  //move !!!

//Use of super
/*Note : when constructor is there in super class and we define constructor in child class also 
then we much call super(); on constructor of child class
*/

class MyShape{
    constructor(clr){
        this.clr=clr;
    }
    move(){
        console.log('move !!!');
    }
}

class MyCircle extends MyShape{
    constructor(color,rad){
        super(color);
       this.radius= rad;
    }
    draw(){
        console.log('draw');
    }
}

const cc = new MyCircle('red',123);
console.log('cc is : ' , cc); //cc is :  MyCircle {clr: "red", radius: 123}


