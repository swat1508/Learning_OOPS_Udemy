(1) index01.js - Prototypes and Prototypical Inheritance
--------------------------------------------------------
prototype is like parent
every object in JS has a prototype expect the root object Object

In console type :
let xx = 'AAA';
Object.getPrototypeOf(xx); //String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
xx.__proto__ //String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}

Note : __proto__ and Object.getPrototypeOf is same 
but __proto__ is depricated and will only work in console for debug purpose

Prototypical Inheritance
------------------------
when we access property/method of an object , JS engine first looks for that property or method on object itself .
If it cant find then it looks at prototype of that object and still not find then looks prototype of prototype of object and so on till root object(Object).

Note: Object created by a given constructor will have same prototype.



(2) index02.js - Property Descriptor
------------------------------------
Object.defineProperty(person,'name',{
    writable:false,    //cant modify name property
    enumerable:false,  //name property we wont find while iterating in keys (be default its true)
    configurable:false  //cant delete name property
});


(3) index03.js - Constructor prototypes
------------------------------------


(4) index04.js - Prototype vs Instance members
-----------------------------------------------
/*
The member in prototype will behave same as instance and it can access instance member like radius. See below :
we will override toString for MyCircle
*/

MyCircle.prototype.toString=function(){  //modifying toString() method
    return `This is Circle with radius : ${this.radius}`;
}

/*
Object.keys - return instance members
for in loop - will return both instance and prototype members

for instance member - hasOwnProperty() - will give true 
for prototype member - hasOwnProperty() - will give false
*/

/* It doesnot matter when we are adding/modifying in prototype
we can create an oject first and then can add/modify in prototype, it will still work 
as here it reference working so it will still be available
*/
(5) 