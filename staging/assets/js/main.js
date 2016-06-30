//
var app = angular.module('BetterBoss',[])

app.constant('API','http://52.33.161.165:9001')

app.controller('MainCtrl', function($scope, $rootScope){

})

app.controller('GetSendCtrl',function(API ,$scope, $http, $rootScope){
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
  // Send values
  $scope.SendQuestions = function(){
    $http({
      method: 'POST',
      url: API + '/ragna/rest/saveAnswers',
      data: [{ 
             "answersArray":[  
                {  
                   "questionName":"jobStatus",
                   "questionId":"1",
                   "answerds":[  
                      {  
                         "CUAL ES TU ESTATUS LABORAL?":"Freelance"
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"6",
                   "answerds":[  
                      {  
                         "Seguro de Gastos Medicos Mayores":"Muy Importante"
                      },
                      {  
                         "Seguro de Coche":"Algo Importante"
                      }
                   ]
                }
             ]
          }
        ]
    }).then(function successCallback(response) {
      console.log(response)
      $scope.QuestionsListShow = response.data; 
    }, function errorCallback(response) {
      console.log(response)
    });
  }
})