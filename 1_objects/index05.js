function Circle(radius){
    this.radius=radius;
    this.draw= function(){
        console.log('draw');
    }
}

const circle = new Circle(10);

console.log("Display members i.e property/method and also its value !!!!");
for(let key in circle){
    console.log(key,circle[key]);
}

console.log("---------------------------------------------");
console.log("Display property and value , exclude if function !!!!");
for(let key in circle){
    if(typeof circle[key]  !== 'function'){
        console.log(key,circle[key]);
    }
}
console.log("---------------------------------------------");
console.log('another way to display members - property/method');
const keys = Object.keys(circle);
console.log('keys ==> ' , keys);


console.log("---------------------------------------------");
console.log('to know if an object has given property');
if('radius' in circle){
    console.log('radius property is present in circle')
}