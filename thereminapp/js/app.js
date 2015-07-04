var app = angular.module("Theremin",[]);

app.controller("MainCtr",["$scope",function($scope){
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
    $scope.$watch("waveLevel",function(newVal,oldVal){
        allFalse();
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
    });
}]);
