//Private method using weak maps
const _radius = new WeakMap();
const _move = new WeakMap();

class MyCircle{
    constructor(radius){
        _radius.set(this,radius); 
        _move.set(this,function(){
            console.log('inside move!!!',this);
        });
    }
    draw(){ 
        console.log(_radius.get(this));
        console.log('----------------------');
        _move.get(this)();
    }
}

 const c2 = new MyCircle(12);
 c2.draw();

/* So we defined move as :
_move.set(this,function(){
            console.log('move!!!',this); 
        });
in console.log we do for "this"  to check what this means here        
and say we want to call this from draw -   _move.get(this) will return a function and so to call - _move.get(this)();
so for above code output will be:

12
----------
inside move !! undefined

this is shown as undfined because class is executed in strict mode and this will be set to undefined 
(and not as global object) */
/*To access  this in _move.set(...   , we can use arrow function 
because arrow function use the this value of their containing function. See below
*/ 

class MyCircle2{
    constructor(radi){
        _radius.set(this,radi); 
        _move.set(this,() => {
            console.log('inside move and using arrow function !!!',this);
        });
    }
    drawing(){ 
        console.log(_radius.get(this));
        console.log('----------------------');
        _move.get(this)();
    }
}
console.log('####################################');
 const c3 = new MyCircle2(123);
 c3.drawing();

 /* output is :
 123
 inside move and using arrow function !!! MyCircle2 {}
  */

