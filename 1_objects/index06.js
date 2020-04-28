function Circle(rad){
    this.radius =  rad;
    let defaultLocation= {x:10,y:20};
    this.draw= function(){
        console.log(`draw with radius : ${this.radius} `);
    }
}

const c1= new Circle(20);
c1.draw();
console.log('radius of c1 is : ' , c1.radius);
/* 
Now say similar to radius we want to get default location , we can't do :
console.log('defaultLocation of c1 is : ' , c1.defaultLocation); //undefined
So for local variables like 'defaultLocation' (also called private members) we need getter and setter

One way is to create method like getDefaultLocations (similar to draw) to return defaultLocation as below :
*/
console.log('=========================================');

function MyCircle(rad){
    this.radius =  rad;
    let defaultLocations= {x:10,y:20};
    this.drawCircle= function(){
        console.log(`draw with radius : ${this.radius} `);
    },
    this.getDefaultLocations= function(){
        return defaultLocations;
    }
}

const c2= new MyCircle(200);
c2.drawCircle();
console.log('radius of c2 is : ' , c2.radius);
console.log('defaultLocation of c2 is : ' , c2.getDefaultLocations()); //defaultLocation of c2 is :  {x: 10, y: 20}

/*
Now say we dont to get defaultLocation by calling method like getDefaultLocation()
but instead want getter and setter like 
circle.defaultLocation // should give value - getter
circle.defaultLocation=... // should set value - setter
*/
console.log('=========================================');

function NewCircle(radi){
    this.radiuss =  radi;

    let default_Location= {x:100,y:200};

    this.draw= function(){
        console.log(`draw with radius : ${this.radiuss} `);
    }
    this.getDefault_Location= function(){
        return default_Location
    }
    Object.defineProperty(this,'default_Location',{
        get : function(){
            return default_Location;
        },
        set :  function(value){
            if(!value.x  || !value.y)
                throw new Error('improper value');
            else
                default_Location = value;
        }
    })
}
const c3 = new NewCircle(99);
c3.draw();
console.log('c3.getDefault_Location() ==> ' , c3.getDefault_Location());
console.log('c3.default_Location ==> ' , c3.default_Location);
//c3.default_Location= 1; //throw error
c3.default_Location= {x:1111,y:2222};
console.log('After Update c3.default_Location ==> ' , c3.default_Location);

