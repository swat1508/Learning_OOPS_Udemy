/* Creating own prototypical inheritance */

function Student(n,r){
    this.name = n;
    this.roll=r;
}
Student.prototype.study=function(){
    console.log(`${this.name} with roll number ${this.roll} is studying !!`)
}


function Teacher(name,department){
    this.name = name;
    this.department=department;
}
Teacher.prototype.teach=function(){
    console.log(`${this.name} is teaching in ${this.department}!!`)
}

const stu= new Student('swatantra' , 123);
stu.study();
const teacher = new Teacher('sinha' , 'OOPS');
teacher.teach();

console.log('==========================================');
console.log('==========================================');

Student.prototype.desc=function(){
    console.log(`name is ${this.name}`);
}
stu.desc();
Teacher.prototype.desc=function(){
    console.log(`name is ${this.name}`);
}
teacher.desc();
console.log('----------------------------------');
/*
we can see desc() functionality is common for both Student and Teacher (implementation is also same)
so we can apply inheritance here
*/

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
/* with above line description method of Person inherited in MyStudent */

const myStu = new MyStudent('abc',123);
console.log('myStu is : ' , myStu);
myStu.description();

