var timer = 30;
var score = 0;
var hitrn = 0;;

function increseScore() {
    score += 10;
    document.querySelector("#scoreVal").innerHTML = score;
}
function getNewHit(params) {
    hitrn = Math.floor(Math.random()*10)
    console.log(hitrn)
    document.querySelector("#hitVal").textContent = hitrn;
}
function makeBubble() {
    var clutter = "";

    for (var i = 1; i < 134; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#titleVal").innerHTML = timer;
        } else {
            clearInterval(timerint)
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over <h1>`
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNm = Number(dets.target.textContent)
    console.log(Number(dets.target.textContent))
    if(hitrn === clickedNm){
        increseScore();
        makeBubble();
        getNewHit();
    }
})
runTimer();
makeBubble();
getNewHit();
