//Prototype vs Instance members

function Circle(radius){
    //instance members
        this.radius= radius;
    this.displayRadius=function(){
        console.log(`Radius is : ${this.radius}`);
    }
}

const circ1 = new Circle(111);
circ1.displayRadius();
const circ2 = new Circle(222);
circ2.displayRadius();

console.log('circ1 : ' , circ1);
console.log('circ2 : ' , circ2);

/*
if we see in browser console for console.log(cir1) and console.log(cir2)
we can see both have displayRadius method
say if there are 1000 objects of Circle then it will occupy much memory and hence what we can do is
put this "displayRadius" in prototype and hence circ1 , circ2,circ100 will have only radius 
however it can still have "displayRadius" as will define in prototype
*/

function MyCircle(radius){
    //instance members
        this.radius= radius;
}

//Prototype Members
MyCircle.prototype.showRadius=function(){
    console.log(`Radius is : ${this.radius}`);
}

const mycirc1 = new MyCircle(101);
mycirc1.showRadius();
const mycirc2 = new MyCircle(102);
mycirc2.showRadius();

console.log('mycirc1 : ' , mycirc1); //in __proto__ we can see "showRadius"
console.log('mycirc2 : ' , mycirc2); //in __proto__ we can see "showRadius"
/*
The member in prototype will behave same as instance and it can access instance member like radius. See below :
we will override toString for MyCircle
*/

MyCircle.prototype.toString=function(){  //modifying toString() method
    return `This is Circle with radius : ${this.radius}`;
}
console.log('after modifying toString');
console.log('mycirc1.toString() ==> ' , mycirc1.toString());
console.log('mycirc2.toString() ==> ' , mycirc2.toString());

/*
Object.keys - return instance members
for in loop - will return both instance and prototype members

for instance member - hasOwnProperty() - will give true 
for prototype member - hasOwnProperty() - will give false
*/

console.log( 'Object.keys(mycirc1) ==> : ' , Object.keys(mycirc1));
console.log('properties by for in loop are below : ');
for(ele in mycirc1){
    console.log(ele);
}


console.log("instance property => circ1.hasOwnProperty('displayRadius') ==> " ,  circ1.hasOwnProperty('displayRadius'));
console.log("prototype property => mycirc1.hasOwnProperty('showRadius') ==> " ,  mycirc1.hasOwnProperty('showRadius'));

/*
So displayRadius is instance method and  showRadius is prototype method
we can aceess instance method from prototype method and vice versa
 */


//Case :1 - accessing prototype method from instance method
console.log('================================================');
console.log('accessing prototype method from instance method');
function Circle1(rad){
    //instance members
        this.radius= rad;
        this.displayRad=function(){
            console.log(`displayRad => Radius is : ${this.radius}`);
            this.showRad();
    }
}
Circle1.prototype.showRad=function(){
    console.log(`showRad => Radius is : ${this.radius}`);
}
const c1 = new Circle1(111);
c1.displayRad();

//Case2: accessing instance method from prototype method
console.log('================================================');
function Circle2(rad){
    //instance members
        this.radi= rad;
        this.displayRadi=function(){
            console.log(`displayRadi => Radius is : ${this.radi}`);
    }
}
Circle2.prototype.showRadi=function(){
    console.log(`showRadi => Radius is : ${this.radi}`);
    this.displayRadi();
}
const c2 = new Circle2(222);
c2.showRadi();

console.log('================================================');
console.log('It doesnot matter when we are adding/modifying in prototype, see this :');
function Circle3(rad){
    //instance members
        this.radiuss= rad;
        this.displayRadiuss=function(){
            console.log(`displayRadiuss => Radius is : ${this.radiuss}`);
    }
}
const c3 = new Circle3(333);  //creating obj first and then adding method in prototype below

Circle3.prototype.showRadiuss=function(){
    console.log(`showRadiuss => Radius is : ${this.radiuss}`);
}

c3.showRadiuss();