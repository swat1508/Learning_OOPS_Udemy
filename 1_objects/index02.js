//Functions are objects

function Circle(radius){  //constructor function as discussed in index01.js
    this.radius=radius;
    this.draw=function(){
        console.log('draw');
    }
}
const circlee = new Circle(10);
console.log('circlee : ' , circlee);
/* The above Circle function is an object
we see in index01.js - Every object has constructor property and it refers to function that was used to create
Since above Circle function is object so what is the constructor of this function ?
*/
console.log(Circle.constructor); //ƒ Function()

/*
so answer is builtin constructor called "Function"
Internally JS uses the Function constructor to create object Circle (which is function)

*/
const Circle1 = new Function('radius', `
this.radius=radius;
this.draw=function(){
    console.log('draw');
}`
);
const myCircle = new Circle1(10);
console.log('myCircle : ' , myCircle);

//line 10 and 29 are same