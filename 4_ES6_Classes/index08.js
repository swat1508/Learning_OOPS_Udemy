//Assignment - implement stack

const _contents = new WeakMap();

class MyStack{
    
    
    constructor(){
        _contents.set(this,[]); //keep private         
         console.log('this => ' , this); //point to current obj of MyStack
    }


    push(item) {
        _contents.get(this).push(item);  //get array and call push 
    }

    pop(){
        const myArray = _contents.get(this);
        if(myArray.length===0){
            throw new Error('cant pop as stack is empty');
        }else{
           return myArray.pop(); //get array and call push
        }
    }

    peek(){
        if(_contents.get(this).length===0){
            throw new Error('cant peek as stack is empty');
        }else{
            const myArray = _contents.get(this);
           return myArray[myArray.length -1]; //get array and call push
        }
    }

    get count(){
        return _contents.get(this).length;
    }

}

const myStack = new MyStack();
myStack.push('A');
console.log('count : ' ,myStack.count);
myStack.push('B');
console.log('count : ' ,myStack.count);
console.log('Peek' ,myStack.peek());
console.log('Pop' ,myStack.pop());
console.log('Pop' ,myStack.pop());
console.log('count : ' ,myStack.count);
//console.log('Peek' ,myStack.peek());


