let num =10;
function increaseByOne(val){
    val=val+1;
}
increaseByOne(num);
console.log('num is : ' , num);  //num is :  10


let num1 = {val:10};
function increaseItByOne(obj){
    obj.val=obj.val+1;
}
increaseItByOne(num1);
console.log('num1.val is : ' , num1); //num1.val is :  {val: 11}
