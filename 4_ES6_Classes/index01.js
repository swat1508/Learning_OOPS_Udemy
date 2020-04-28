//ES6 Classes
class Circle{
    constructor(rad){
        this.radius=rad;
    }
    draw(){
        console.log('draw with radius: ', this.radius );
    }
}
const c1= new Circle(10);
c1.draw();
console.log('c1 : ' , c1);
/*
output : instance member - radius
and prototype - constructor and draw
if we want draw method to not present in prototype but in instance then we need to put inside constructor
*/
class MyCircle{
    constructor(rad){
        this.radius=rad;
        this.drawCircle=function(){
            console.log('draw with radius: ', this.radius );
        }
    }
    
}
const c2 = new MyCircle(20);
c2.drawCircle();
console.log('c2 : ' , c2);
/* It will show both radius and drawCircle as instance members */


