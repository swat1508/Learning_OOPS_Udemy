(1) index01.js -Factory Function and Constructor Function
------------------------------------------

function createCircle(raduis){    //Factory Function
    return {
        radius:radius,
        draw:function(){
            console.log('draw)
        }
    }
}
const circle = createCircle(10);


function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('draw');
    }
}

const another = new Circle(draw);

/*
Every object has constructor property and it refers to function that was used to create
See below :
*/
console.log('circle obj constructor : ' , circle.constructor);  //ƒ Object()

console.log('another object constructor : ' , another.constructor);//ƒ Circle(rad){
================================================================================================
(2) index2.js - Functions are Objects

(3) index03.js - Primitive and Reference type
---------------------------------------------
Primitive type - Number, String, Boolean , Symbol, undefined, null
Reference type - Object,Function, Array 

(4) index04.js - Adding or removing properties
------------------------------------------

(5) index05 - Enumerating Properties
------------------------------------------
(6) index06.js - Getter and Setter
/* Object.defineProperty(obj, prop, descriptor)

obj : The object on which to define the property.
prop : The name or Symbol of the property to be defined or modified.
descriptor : The descriptor for the property being defined or modified
 */
------------------------------------------
(7) index07.js - Assignment (Stop watch)
------------------------------------------
