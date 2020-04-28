function Circle(rad){
    this.radius=rad;
    this.draw=function(){
        console.log(`radius of this circle is : ${this.radius}`);
    }
}

const circ = new Circle(12);
circ.draw();

/*In browser console, if we do :
circ.__proto_              - it will show Constructor for Circle
circ.__proto__.__proto__   - it will show Constructor for Object
*/