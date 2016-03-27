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

function changeVolume(){
  var volumeSlider = document.querySelector("#volume");
  var player = document.querySelector("audio");
  player.volume = volumeSlider.value;
}

function init(){
  var player = document.querySelector("audio");
  console.log(player);

  var playButton = document.querySelector("#playButton");
  playButton.addEventListener("click", playMusic);
  
  var to100Button = document.querySelector("#to100");
  to100Button.addEventListener("click", to100);
  
  var volumeSlider = document.querySelector("#volume");
  volumeSlider.addEventListener("change", changeVolume);
};

window.addEventListener("load", event =>{
  installServiceWorker();
  init();
});
