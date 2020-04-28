//method overriding
class Shape{
    move(){
        console.log('Shape class - move method');
    }
}


class Circle extends Shape{
    move(){
        super.move(); //to call move() method of super class
        console.log('Circle class - move method');
    }
}

const cc = new Circle();
cc.move();

/* Output is :
Shape class - move method
Circle class - move method
*/