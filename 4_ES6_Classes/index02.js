//Hoisting
/*
In js 2 ways to define function 
1. function declaration:
function sayHello(){
}

2. function expression 
const sayGoodBye= function(){
};

with function expression we should add semicolon at end 
function declarations are hoitsed - means raised to top of code so they can be called before define
*/
sayHello();  //give output - in sayHello 
//sayGoodBye(); //give error: Cannot access 'sayGoodBye' before initialization

function sayHello(){
console.log('in sayHello');
}

const sayGoodBye= function(){
    console.log('in sayGoodBye');
};
sayGoodBye(); //output - in sayGoodBye


/*
Classes can also be defined in 2 ways :
(1) Class Declaration :
class Circle{
}

(2)Class Expression:
const square= class{
};
Note: - Unlike functions class declaration are not hoisted
      - We generally use class declaration 
*/