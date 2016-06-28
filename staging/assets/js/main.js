var app = angular.module('BetterBoss',['LocalStorageModule'])

app.constant('API','http://52.33.161.165:9001')

app.controller('MainCtrl', function($scope, $rootScope){

})

app.controller('GetSendCtrl',function(API ,$scope, $http, localStorageService, $rootScope){
	$scope.GetQuestions = function(){
	 	$http({
      method: 'GET',
      url: API + '/ragna/rest/questionList'
    }).then(function successCallback(response) {
    	console.log(response)
      $scope.QuestionsListShow = response.data; 
    }, function errorCallback(response) {
    	console.log(response)
    });
	}
})

