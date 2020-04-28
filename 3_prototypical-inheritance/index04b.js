/* This is demo for  - Intermediate Function Inheritance 
Please read index04.js to know what is use of Intermediate Function Inheritance  */

console.log(' Using ==> Intermediate Function Inheritance !!! ');

function Person(ID){
    this.id=ID;
}
Person.prototype.show=function(){
    console.log(`Hellow World !!! from ${this.name}`);
}
function extend(Child,Parent){
    Child.prototype= Object.create(Person.prototype);
    Child.prototype.constructor=Child;
}
function Student(n,r,i){
    Person.call(this,i);
    this.name = n;
    this.roll=r;
}
extend(Student,Person);
const stu = new Student('AAA',123,101);
stu.show();


function Teacher(n,r,i){
    Person.call(this,i);
    this.name = n;
    this.roll=r;
}
extend(Teacher,Person);
const teacher = new Teacher('BBB',456,202);
teacher.show();


