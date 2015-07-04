var app = angular.module("Theremin",[]);

app.controller("MainCtr",["$scope","melody",function($scope,melody){
    //値によってdisplays
    $scope.isHighShow = false;
    $scope.isHigherShow = false;
    $scope.isLowShow = false;
    $scope.isLowerShow = false;
    function allFalse(){
        $scope.isHighShow = false;
        $scope.isHigherShow = false;
        $scope.isLowShow = false;
        $scope.isLowerShow = false;
    }
    console.log(melody);
    $scope.level = melody;
    console.log($scope.level);
    $scope.$watch("level.melodyLevel",function(newVal,oldVal){
        allFalse();
        console.log("かわったよー");
        console.log(newVal);
        var _newVal = +newVal;
        switch (_newVal) {
            case 4:
                $scope.isHighShow = true;
                console.log(newVal);
                break;
            case 3:
                $scope.isHigherShow = true;
                break;
            case 2:
                $scope.isLowerShow = true;
                break;
            case 1:
                $scope.isLowShow = true;
                break;
            default:

        }
    })
}]);
app.service("melody",["$rootScope","$window","$timeout",function($rootScope,$window,$timeout){
    var self =this;
    self.melodyLevel ='';
    const PITCH = [
 220 * Math.pow( 1.06, 3 ), // ド
 220 * Math.pow( 1.06, 4 ), // ド#
 220 * Math.pow( 1.06, 5 ), // レ
 220 * Math.pow( 1.06, 6 ), // レ#
 220 * Math.pow( 1.06, 7 ), // ミ
 220 * Math.pow( 1.06, 8 ), // ファ
 220 * Math.pow( 1.06, 9 ), // ファ#
 220 * Math.pow( 1.06,10 ), // ソ
 220 * Math.pow( 1.06,11 ), // ソ#
 440, // ラ
 440 * Math.pow( 1.06, 1 ), // ラ#
 440 * Math.pow( 1.06, 2 ) // シ
];
const DEFAULT_PITCH = PITCH[0];

var indicator;
var audioContext;
var oscillator;

var displayBrightness = function(element, value){ //luxを<h1>に表示
 element.textContent = value;
};

var changePitch = function(value){ //ピッチへ変換した値をoscillatorに渡す
 oscillator.frequency.value = value;
};

var lux2Pitch = function(lux){ //ルクスの値をピッチに変換する
 //var index = Math.floor(Math.max(100, Math.min(1100, lux)) / 100);
 //return PITCH[index];
 if(0<=lux && lux<30){
   var wave = 1;
   $timeout(function(){
       console.log("変化");
       self.melodyLevel = wave;
        console.log(self.melodyLevel);
   },100);
   return PITCH[0];
 }else if(30<=lux && lux<60){
   var wave = 1;
   $timeout(function(){
       console.log("変化");
       self.melodyLevel = wave;
        console.log(self.melodyLevel);
   },100);
   return PITCH[1];
 }else if(60<=lux && lux<90){
   var wave = 1;
   $timeout(function(){
       console.log("変化");
       self.melodyLevel = wave;
        console.log(self.melodyLevel);
   },100);
   return PITCH[2];
 }else if(90<=lux && lux<120){
   var wave = 2;
   $timeout(function(){
       console.log("変化");
       self.melodyLevel = wave;
        console.log(self.melodyLevel);
   },100);
   return PITCH[3];
 }else if(120<=lux && lux<150){
   var wave = 2;
   $timeout(function(){
       console.log("変化");
       self.melodyLevel = wave;
        console.log(self.melodyLevel);
   },100);
   return PITCH[4];
 }else if(150<=lux && lux<180){
   var wave = 2;
   $timeout(function(){
       console.log("変化");
       self.melodyLevel = wave;
        console.log(self.melodyLevel);
   },100);
   return PITCH[5];
 }else if(180<=lux && lux<210){
   var wave = 3;
   $timeout(function(){
       console.log("変化");
       self.melodyLevel = wave;
        console.log(self.melodyLevel);
   },100);
   return PITCH[6];
 }else if(210<=lux && lux<240){
   var wave = 3;
   $timeout(function(){
       console.log("変化");
       self.melodyLevel = wave;
        console.log(self.melodyLevel);
   },100);
   return PITCH[7];
 }else if(240<=lux && lux<270){
   var wave = 3;
   $timeout(function(){
       console.log("変化");
       self.melodyLevel = wave;
        console.log(self.melodyLevel);
   },100);
   return PITCH[8];
 }else if(270<=lux && lux<300){
   var wave = 4;
   $timeout(function(){
       console.log("変化");
       self.melodyLevel = wave;
        console.log(self.melodyLevel);
   },100);
   return PITCH[9];
 }else if(300<=lux && lux<330){
   var wave = 4;
   $timeout(function(){
       console.log("変化");
       self.melodyLevel = wave;
        console.log(self.melodyLevel);
   },100);
   return PITCH[10];
 }else if(330<=lux && lux<360){
   var wave = 4;
   $timeout(function(){
       console.log("変化");
       self.melodyLevel = wave;
        console.log(self.melodyLevel);
   },100);
   return PITCH[11];
 }


};

var handleDeviceLightEvent = function(event){
 var lux = event.value; //lux値測定
 if(indicator != null){
   displayBrightness(indicator, lux); //表示
 }
 changePitch(lux2Pitch(lux)); //ピッチに変換
};

var initApp = function(){
 indicator = document.querySelector("h1");

 audioContext = new AudioContext();
 oscillator = audioContext.createOscillator(); //音声系の処理を行うコンテキスト
 oscillator.type = "triangle"; //"sine"; //"sawtooth"; 音色
 oscillator.frequency.value = DEFAULT_PITCH; //音程
 oscillator.connect(audioContext.destination);
 oscillator.start();
};

$window.addEventListener("load", initApp);
$window.addEventListener("devicelight", handleDeviceLightEvent);

}])
