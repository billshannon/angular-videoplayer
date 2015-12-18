angular.module('videoApp', ['ngAnimate'])
    .controller('videoCtrl', ['$scope', '$window', function ($scope, $window) {
        $scope.videoDisplay = document.getElementById("VideoElement");
        $scope.videoSource = $window.videoSource;
        $scope.titleDisplay = $window.titleDisplay;
        $scope.videoDescription = $window.videoDescription
    }]);