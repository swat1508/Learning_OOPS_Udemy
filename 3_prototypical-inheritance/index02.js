/*Resetting Constructor */

//2 way to create an object 
function MyCar(name,price){
    this.name = name;
    this.price=price;
}
const car1 = new MyCar('indica',111);
const car2 = new MyCar.prototype.constructor('indica',111);
console.log('car1 : ' , car1);
console.log('car2 : ' , car2);
/*The above car1 and car2 are same ,now we will see what problem we may see with create creating object like car2
if we use Prototypical Inheritance */


function Person(){

}

Person.prototype.description=function(){
    console.log(`name is ${this.name}`);
}
const per = new Person();
console.log('per is : ' , per);

function MyStudent(n,r){
    this.name = n;
    this.roll=r;
}
MyStudent.prototype.study=function(){
    console.log(`${this.name} with roll number ${this.roll} is studying !!`)
}

MyStudent.prototype= Object.create(Person.prototype); //if not this line then MyStudent prototype is of Object
//MyStudent.prototype.constructor=MyStudent; // - this line explanation is at lest keep reading comment below

/* with above line description method of Person inherited in MyStudent */
console.log('----------------------------------');
const myStu = new MyStudent('abc',123);
console.log('myStu is : ' , myStu);
myStu.description();
console.log('----------------------------------');



console.log('#################################');
const stu1 = new MyStudent('aaa',111);
console.log('stu1 is : ' , stu1);
const stu2 = new MyStudent.prototype.constructor('aaa',111);
console.log('stu2 is : ' , stu2);
/* if line 21 is commented ==> MyStudent.prototype= Object.create(Person.prototype); 
    above stu1 and stu2 are same
    But if uncommented stu2 will be of Person and not MyStudent 
So as best practice when we reset prototype of Object we must reset its constructor as well 
Hence after line 21 we should put the below line as well and then stu2 will also be of type MyStudent
MyStudent.prototype.constructor=MyStudent;


*/



