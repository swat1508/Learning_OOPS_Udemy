/* Intermediate Function Inheritance */

function Person(ID){
    this.id=ID;
}
Person.prototype.show=function(){
    console.log(`Hellow World !!! from ${this.name}`);
}

function Student(n,r,i){
    Person.call(this,i);
    this.name = n;
    this.roll=r;
}
Student.prototype= Object.create(Person.prototype);
Student.prototype.constructor=Student;
const stu = new Student('AAA',123,101);
stu.show();
function Teacher(n,r,i){
    Person.call(this,i);
    this.name = n;
    this.roll=r;
}
Teacher.prototype= Object.create(Person.prototype);
Teacher.prototype.constructor=Teacher;
const teacher = new Teacher('BBB',456,202);
teacher.show();

/*
So we saw Student and Person 
to utilize inheritance functionality we created Teacher to utilize Person show method
and hence we need to copy the 2 lines below:
Teacher.prototype= Object.create(Person.prototype);
Teacher.prototype.constructor=Teacher;

if we see output of code above  it will work but everytime  we need to add the above 2 lines
say if we need to create Parent and want to use show method of Person, those 2 lines needed
so we will create a function and add these 2 lines there and call this function when new Type is created for 
inheritance .This function is called - Intermediate Function Inheritance
See index04b.js  
*/

