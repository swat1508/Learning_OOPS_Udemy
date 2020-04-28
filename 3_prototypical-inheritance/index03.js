//calling the super constructor (using call)

/* say we want to initialize MyStudent with ID and for that
    creating MyStudent object with 3 params AAA&111 for name&roll-number and 
    101 for id 
    and also modified Person by passing ID 
    See below code and output*/

function Person(ID){
    this.id=ID;
}

const per = new Person(101);
console.log('per : ' , per);

function MyStudent(n,r,i){
    Person(i);
//  Person.call(this,i); //explanation below
    this.name = n;
    this.roll=r;
}
MyStudent.prototype= Object.create(Person.prototype);
MyStudent.prototype.constructor=MyStudent;
const stu = new MyStudent('AAA',111,101);
console.log('stu is : ' , stu);
/*
if we see output we find stu doesnot have id .
this is because  Person(i); sets id 101 to window
since we are not using new operator in Person(i)
so this in this.id will point to window object
To fix this we should comment Person(i) and add line => Person.call(this,i)
    //Person(i);
    Person.call(this,i); //explanation below
with above changes   
const stu = new MyStudent('AAA',111,101);
console.log('stu is : ' , stu);

stu will give output as name,roll and also id
*/

