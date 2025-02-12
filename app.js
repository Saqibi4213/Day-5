var timer = 60;
var score = 0;
var rnhit = 0;

function scoreHit() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 168; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div id="bubble">${rn}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = clutter;
}

function timerInt() {
  var timerint = setInterval(() => {
    if (timer > 0) {
      timer--;
    } else {
      clearInterval(timerint);
      document.querySelector(".pbtm").innerHTML = `<h1>Game Over !</h1>`;
    }

    document.querySelector("#timerval").textContent = timer;
  }, 1000);
}

function newHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

document.querySelector("#pbottm").addEventListener("click", function (dets){
  var countnum = Number(dets.target.textContent);
  if(countnum === hitrn){
    scoreHit();
    makeBubble();
    newHit();
  }
})

makeBubble();
timerInt();
newHit();
