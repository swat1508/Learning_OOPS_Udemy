(1) index01.js - Create Prototypical Inheritance
------------------------------------------------
function Person(){
}
Person.prototype.description=function(){
    console.log(`name is ${this.name}`);
}

function Student(n,r){
    this.name = n;
    this.roll=r;
}

MyStudent.prototype= Object.create(Person.prototype); //if not this line then MyStudent prototype is of Object
/* with above line description method of Person inherited in MyStudent */

const myStu = new MyStudent('abc',123);
console.log('myStu is : ' , myStu);
myStu.description();
==================================================================================================================
(2) index02.js - Resetting Constructor
-------------------------

==================================================================================================================
(3) index03.js - calling the super constructor
-----------------------------------------------


==================================================================================================================
(4) index04.js - what is Intermediate Function Inheritance
    index04b.js - demo for Intermediate Function Inheritance
---------------------------------------------------

==================================================================================================================
(5) index05.js - Method Overriding
----------------------------------

===================================================================================================================
(6) index06.js - Mixins
-----------------------
when to use inheritance ?
use composition over inheritance 
to achieve  composition  - we use "mixins"

------------------------------------------