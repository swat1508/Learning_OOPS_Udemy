function createCircle(rad){    //Factory Function
    return {
        radius:rad,
        draw:function(){
            console.log('draw with radius as : ' , this.radius)
        }
    }
}
const circle = createCircle(10);
circle.draw();

function Circle(rad){  //Constructor Function
    this.radius=rad;
    this.draw=function(){
        console.log('draw with radius as :' , this.radius);
    }
}

const another = new Circle(20);
another.draw();

/*
Every object has constructor property and it refers to function that was used to create
See below :
*/
console.log('circle obj constructor : ' , circle.constructor);  //ƒ Object()

console.log('another object constructor : ' , another.constructor);//ƒ Circle(rad){

