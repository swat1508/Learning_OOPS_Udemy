//Private members using weak maps

const _radius = new WeakMap();//weakmap- its like a dictionary where keys are objects and values can be anything

class Circle{
    constructor(radius){
        _radius.set(this,radius); 
    }
}

const c1 = new Circle(11);
/*
Technically we can access this radius private property if we can get access to the weakmap
Later on with modules we can hide this _radius in a module and only export the Circle class
Now, to access the radius property we can add a method -draw */

class MyCircle{
    constructor(radius){
        _radius.set(this,radius); 
    }
    draw(){
        console.log(_radius.get(this));
    }
}

const c2 = new MyCircle(12);
c2.draw(); //12

/*
So we saw private variable here
we wil see private method in index04b.js
*/
