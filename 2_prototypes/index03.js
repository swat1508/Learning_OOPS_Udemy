//Constructor prototypes

/*
Constructor also have prototype property (as constructor are also object)
obj.__proto__ is same as obj's constructor.prototype
 */

/*
In browser's console try below 2 cases :
(we cant do in js file as __proto__ is depricated for use but can be used in console for debugging)
(1) 
let obj = {};
obj.__proto__
Object.prototype

the above 2 will be same obj's __proto__ is same as obj parents's prototype

similarly

(2)
let arr= [];
array.__proto_-
Array.prototype
the above 2 will be same obj's __proto__ is same as obj parents's prototype
*/

function MyCircle(rad){
    this.radius =  rad;
    this.displayRadius=function(){
        console.log(`this circle has radius : ${this.radius}`);
    }
}

const circle = new MyCircle(121);
circle.displayRadius();
/* In browser console:
circle.__proto__
and 
MyCircle.prototype
will be same
*/
  

