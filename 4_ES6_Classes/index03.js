//Private Members Using Symbols

const _radius = Symbol();
class Circle{
    constructor(circle_name,rad){
        this.name=circle_name;
        this[_radius] = rad; //same as this._radius (but can used like this as _radius is dynamic number)
    }
}

const c = new Circle('mycircle',10);
console.log('c  is : ' , c); //Circle {name: "mycircle", Symbol(): 10}
/*
if we type c and dot we will find _radius is not coming as its dynamic value but name will be coming
*/

//there is a way to access it
console.log("using getOwnPropertyNames ==> : ", Object.getOwnPropertyNames(c)); //["name"] - only name is shown
console.log("getOwnPropertySymbols ==> : " , Object.getOwnPropertySymbols(c));  //["Symbol()"]
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]); //10 - so we got thr radius

//so similar to variable we can use symbol in method as well

const _radi = Symbol();
const _draw = Symbol();
class MyCircle{
    constructor(circleName,radiuss){
        this.circ_name=circleName;
        this[_radi] = radiuss; //same as this._radius (but can used like this as _radius is dynamic number)
        this.show=function(){
            console.log('show function!!!');
        }
    }
    [_draw](){
        console.log('draw!!!!');
    }
}

const cc = new MyCircle(100);
console.log('cc is : ' , cc); //in browser console - expand __proto__ , we can see Symbol() - this is _draw function
