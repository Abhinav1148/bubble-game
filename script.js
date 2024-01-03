var timer=60;
var score=0;
var hitrn=0;
function increseScore(){
    score+=10;
    document.querySelector('.scoreval').textContent=score;
}
function makeNewhit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector('.gethitval').textContent=hitrn;
}

function makeBubble(){
    var clutter='';
    for(var i=1;i<=198;i++){
        rn=Math.floor(Math.random()*10);
        clutter+=`<div id="bubble">${rn}</div>`;
    }
    document.querySelector('#pabtm').innerHTML=clutter;
}

function runTimer(){
    var timerint=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('.timer').textContent=timer;
        }
        else{
            document.querySelector('#pabtm').innerHTML=`<h1>Game Over</h1>`;
            clearInterval(timerint);
        }

    },1000)
}

makeNewhit();
runTimer();
makeBubble();
document.querySelector('#pabtm').addEventListener('click',function(dets){
    var clickednum=Number(dets.target.textContent);
    if(clickednum===hitrn){
        increseScore();
        makeBubble();
        makeNewhit();
    }
})
