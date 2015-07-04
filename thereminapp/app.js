window.addEventListener("load", function() {
  var player = document.getElementById("player");
  var button = document.getElementById("button");
  button.addEventListener("click",reWrite);
  //var num;
function reWrite(){
  if(player.className == "play"){
    player.className = "pause";
    button.value = "Play"
  }else if(player.className == "pause"){
    player.className = "play";
    button.value = "Pause"
  }else{
    console.log("エラー");
  }
}
  
  var pause = document.getElementById("pause");
  var button = document.getElementById("button");
  button.addEventListener("click",reWrite);
  //var num;

});