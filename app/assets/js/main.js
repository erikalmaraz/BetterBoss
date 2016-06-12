var app = angular.module('BetterBoss',['LocalStorageModule'])

app.constant('API','http://52.35.210.200:9000')

app.constant('PayBook', 'https://ofd44opsak.execute-api.us-west-2.amazonaws.com/fintech/api-accounts')

app.controller('MainCtrl', function($scope, $rootScope){

})

app.controller('ResponseBoss',function(API ,$scope, $http, localStorageService, $rootScope){
  $rootScope.TokenUser = '';
  $rootScope.ClassBody = 'Login';
  $scope.LoginUser = {};
	$scope.SendLogin = function(){
	 	$http({
      method: 'POST',
      url: 'https://ofd44opsak.execute-api.us-west-2.amazonaws.com/fintech/api-login',
      data: $scope.LoginUser
    }).then(function successCallback(response) {
    	console.log(response)
      window.location.href = 'http://localhost:8000/frame3.html'
      $rootScope.TokenUser = localStorageService.set('token',response.data.token);  
    }, function errorCallback(response) {
    	console.log(response)
    });
	}
})

app.controller('GetCashData', function($scope,PayBook, $rootScope, $http){
  $rootScope.ClassBody = 'GetCashData';
  $scope.GetBankData = function(){
      $http({
        method: 'GET',
        url: PayBook
      }).then(function successCallback(response) {

      }, function errorCallback(response) {
        console.log(response)
      });
  }
  $scope.GetOperationByAccount = function(){
      $scope.Operations = [];
      $http({
        method: 'GET',
        url: 'https://ofd44opsak.execute-api.us-west-2.amazonaws.com/fintech/api-accounts/%7BaccountId%7D'
      }).then(function successCallback(response) {
        $scope.TotalGasto = 0;
        for (var i = 0; i < response.data.response.length; i++) {
          $scope.Operations.push(response.data.response[i]);
          $scope.TotalGasto = $scope.TotalGasto + response.data.response[i].amount;
        }
      }, function errorCallback(response) {
        console.log(response)
      });
  }
})