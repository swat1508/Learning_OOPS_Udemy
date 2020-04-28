
//mixins
/*
Object.assign(target, ...sources)
target : The target object — what to apply the sources’ properties to, which is returned after it is modified.
sources : The source object(s) — objects containing the properties you want to apply.
Return value :The target object.
*/

const canEat = {
    eat: function(){
        console.log('eat method !!!!');
    }
};

const canWalk = {
    walk: function(){
        console.log('walk method !!!!');
    }
};
const person = Object.assign({},canEat,canWalk);
console.log('person : ' , person);  //person :  {eat: ƒ, walk: ƒ}

//if we are using constructor function
function Person(){
}
const per = Object.assign(Person.prototype,canEat,canWalk);
console.log('per : ' , per); //{eat: ƒ, walk: ƒ, constructor: ƒ}
//next time we create a person object we will have the abover capability
const pp = new Person();
console.log('pp is : ' , pp); 
/*output is :  pp is :  Person {} 
we we expand __proto__ we can see eat(),walk() etc  */

/*
we can create a function mixin
and pass list of sources to get target
*/

function mixin(target, ...sources){
    Object.assign(target , ...sources);
}
const canBat = {
    bat: function(){
        console.log('batting method !!!!');
    }
};

const canBowl = {
    bowl: function(){
        console.log('bowling method !!!!');
    }
};
const canKeep = {
    wicketKeep: function(){
        console.log('wicket-keeping method !!!!');
    }
};
const canField = {
    field: function(){
        console.log('fielding method !!!!');
    }
};

function Allrounder(){

}

mixin(Allrounder.prototype,canBat,canBowl,canField);
const all_rounder = new Allrounder();
console.log('all_rounder : ' , all_rounder);