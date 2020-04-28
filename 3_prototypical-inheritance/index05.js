/*
With inheritance sometimes it may happen that we face a situation where the implementation we have defined in 
parent object may not be ideal in child object.So we need to override it in child
*/
function extend(Child,Parent){
    Child.prototype= Object.create(Person.prototype);
    Child.prototype.constructor=Child;
}


function Person(){
}

Person.prototype.show=function(){
    console.log(`Hellow World from ${this.name}`);
}

function Student(name, roll){
    this.name= name;
    this.roll= roll;
}

extend(Student,Person);

Student.prototype.show=function(){
//  Person.prototype.show.call(this); //details in below keep reading
    console.log(`Bye World from ${this.name}`);
}

const st = new Student('swatantra',12);
st.show();

/*
if line 25 to 28 is commented then it will display - Hello world from Swatantra
but if uncommented it will override and display Bye World from Swatantra

if method is overridden but still we want to call method of Parent then uncomment line 26
Person.prototype.show.call(this);
it will display both :
Hello World from swatantra
Bye world from swatantra

Note : this is being used in 
Person.prototype.show=function(){
    console.log(`Hellow World from ${this.name}`);
}
as ${this.name} so we can't call Parent's show method as - Person.prototype.show(); and hence need to use "call"
as in line 26
if this was not used then we can call by => Person.prototype.show();
and it would work

*/
