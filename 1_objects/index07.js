
function StopWatch(){
    let duration=0;
    let running=false;
    let myTimer;

    this.start= function(){
        if(running){
            throw new Error('Its already started!!!');
        }else{
            running=true;
            myTimer = setInterval(function(){ 
                duration=duration+1;
                }, 1000);
            console.log('Stopwatch Started !!!');
        }
    }

    this.stop= function(){
        if(!running){
            throw new Error('Its not running so cant stop!!!');
        }
        running=false;
        clearInterval(myTimer);
        console.log('Stopwatch stopped !!!');
    }

    this.reset = function(){
        if(!running){
            throw new Error('Its not running so cant reset!!!');
        }
        duration = 0;
    }

    this.duration= function(){
        return duration;
    }

}

const stopwatch = new StopWatch();
delete(stopwatch);

