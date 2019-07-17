var zoom    = document.querySelector("#zoom");
var zoomImg = document.querySelector("#zoom-img");
var mainImg = document.querySelector("#main-img");
var enterTL = new TimelineMax({ paused: true });
var timer   = TweenLite.delayedCall(1, () => enterTL.reverse()).pause();

var cx, cy, ratio;

window.addEventListener("load", init);

function init() {
  
  zoomImg.src = mainImg.src;
  ratio = mainImg.naturalWidth / mainImg.width;
  resize();
  
  TweenLite.set([zoom, zoomImg], { xPercent: -50, yPercent: -50 });
  TweenLite.set(zoom, { autoAlpha: 0, scale: 0 });
  
  enterTL
    .to(mainImg, 0.5, { filter: "grayscale(1)", "-webkit-filter": "grayscale(1)" }, 0)
    .to(zoom, 0.5, { autoAlpha: 1, scale: 1 }, 0)
    
  window.addEventListener("resize", resize);  
  mainImg.addEventListener("mouseleave", leaveAction);
  mainImg.addEventListener("mousemove", moveAction);
}

function leaveAction() {
  enterTL.reverse();
}

function moveAction(e) {
  enterTL.play();
  timer.restart(true);
  TweenLite.set(zoom, { x: e.x, y: e.y });
  TweenLite.set(zoomImg, { x: (cx - e.x) * ratio, y: (cy - e.y) * ratio }); 
}

function resize() { 
  var rect = mainImg.getBoundingClientRect();
  cx = rect.left + rect.width  / 2;
  cy = rect.top  + rect.height / 2;
}
