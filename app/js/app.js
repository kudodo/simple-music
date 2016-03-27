console.log("アプリの処理開始");

function installServiceWorker(){
  navigator.serviceWorker.register("js/sw.js").then(registration => {
    console.log("The service worker has been registered", registration);
  }).catch(error => {
    console.log(error);
  });
}

function playMusic(){
  console.log("再生ぼたんがおされたよ");
  var player = document.querySelector("audio");
  if(player.paused){
    player.play();
  }else{
    player.pause();
  }
}

function to100(){
  var player = document.querySelector("audio");
  player.currentTime = player.currentTime + 10;
}

function changeVolume(event){
  if(event.buttons != 0){
    var player = document.querySelector("audio");
    var relativeX = event.clientX / event.target.clientWidth;
    var volume = Math.min(relativeX, 1.0);
    player.volume = volume;
  }
}

function init(){
  var player = document.querySelector("audio");
  console.log(player);

  var playButton = document.querySelector("#playButton");
  playButton.addEventListener("click", playMusic);
  
  var to100Button = document.querySelector("#to100");
  to100Button.addEventListener("click", to100);
  
  var volumeSlider = document.querySelector("#volume");
  volumeSlider.addEventListener("mousemove", changeVolume);
};

window.addEventListener("load", event =>{
  installServiceWorker();
  init();
});
