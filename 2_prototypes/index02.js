//Property-Descriptor


let myPerson= {name:'abc'};
let objectBase = Object.getPrototypeOf(myPerson);
console.log('objectBase : ' , objectBase); //Object

for(let key in myPerson){
    console.log(key);
}
console.log(myPerson.toString());
//output : name
/*
myPerson is of type object but it showed only "name" property
so why other property and method like toString is not shown 
even though we can do -  console.log(myPerson.toString()); //[Object Object]

The reason is in JS properties have attributes attached to them . sometimes these attribues prevents a property
from being enumerated. To see property attached to toString we will do below :
*/
let descriptor = Object.getOwnPropertyDescriptor(objectBase,'toString');
console.log('descriptor => ' , descriptor);
/* output is :
{
writable: true, enumerable: false, configurable: true, value: ƒ}
configurable: true
enumerable: false
value: ƒ toString()
writable: true
__proto__: Object
}
Since enumerable is false so this to String method was not showing while enumerating
When we create our object we can set these attributes
*/
console.log('==========================================================');

let person={name:'swatrantra'};
console.log(person);

Object.defineProperty(person,'name',{
    writable:false,    //cant modify name property
    enumerable:false,  //name property we wont find while iterating in keys (be default its true)
    configurable:false  //cant delete name property
});

console.log( 'in array from ' , Object.keys(person)); //in array from  [] - because enumerable:false

person.name = 'sinha';
console.log('after changing name : ' , person); //after changing name :  {name: "swatrantra"} - because  writable:false

delete person.name;
console.log('After delete : ' , person); //After delete :  {name: "swatrantra"} - because configurable:false

