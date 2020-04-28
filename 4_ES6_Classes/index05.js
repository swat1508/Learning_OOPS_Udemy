//Getter and Setter

/* We have seen we can use Object.defineProperty  in 1_objects=> index06.js to implement 
getter and setter like below:  */

const _radi = new WeakMap();

class Circle{
    constructor(radii) {
       _radi.set(this,radii);
       Object.defineProperty(this,'_radi',{
                get : function(){
                    return _radi.get(this);
                },
                set :  function(value){                
                 _radi.set(this,value);
                }
        })
    }
}
const cc1 = new Circle(17);
console.log(cc1._radi); //17
cc1._radi=18;
console.log('After change : ' , cc1._radi); //After Change : 18
/*
However in ES6 we can implement getter and setter much easier
 */
 
console.log('#################################################');

 const _radius = new WeakMap();
 class MyCircle{
     constructor(radi) {
        _radius.set(this,radi);
     }

     get radius(){
         return _radius.get(this);
     }

     set radius(value){
         if(value <= 0)
            throw new Error('invalid radius');
        else
            _radius.set(this,value);
     }
 }

 const circ = new MyCircle(999);
 console.log(circ.radius);   //99
 circ.radius=111;
 console.log('After setting : ' ,circ.radius); //After setting :  111
