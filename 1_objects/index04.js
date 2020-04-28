function Circle(rad){
    this.radius=rad;
    this.draw=function(){
        console.log('draw!!')
    }
}
const c1 = new Circle(10);
console.log('c1 : ' , c1); //c1 :  Circle {radius: 10, draw: ƒ}

c1.location={x:1};
console.log('c1 : ' , c1); //Circle {radius: 10, location: {…}, draw: ƒ}

delete c1.radius;
console.log('c1 : ' , c1); //c1 :  Circle {location: {…}, draw: ƒ}