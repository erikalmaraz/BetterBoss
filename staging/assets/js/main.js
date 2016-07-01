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
    var FourthQuestionMulti = [];
    var checkboxes = document.getElementsByName('checkbox4');
    for (var i=0, n=checkboxes.length;i<n;i++) {
      if (checkboxes[i].checked) {
        FourthQuestionMulti.push(checkboxes[i].value);
      }
    }
    //
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
                         "¿CUAL ES TU ESTATUS LABORAL?": $('#Question1').find('input[type="radio"]:checked').val()
                      }
                   ] 
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"2",
                   "answerds":[  
                      {  
                         "¿CUANTO TIEMPO LLEVAS EN TU EMPLEO/SITUACION ACTUAL?":$('#Question2').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"3",
                   "answerds":[  
                      {  
                         "¿TU PATRÓN DECLARA TODO TU SALARIO?":$('#Question3').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"4",
                   "answerds":[  
                      {  
                         "¿QUE PRESTACIONES TE OTORGA TU EMPLEADOR?": FourthQuestionMulti
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"5",
                   "answerds":[  
                      {  
                         "De las prestaciones que ya te proporciona tu empleador, en general ¿Qué tan satisfech@ estás?": $('#Question5').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"6",
                   "answerds":[  
                      {  
                         "Que tan importantes fueron las siguientes prestaciones al momento de aceptar tu empleo actual":$('#Question6').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"7",
                   "answerds":[  
                      {  
                         "¿En este momento, tienes contratadas prestaciones por tu cuenta?": $('#Question7').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"8",
                   "answerds":[  
                      {
                         "¿Que Prestaciones has contratado por tu cuenta? Elige todas las que apliquen?":$('#Question8').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"9",
                   "answerds":[  
                      {  
                         "¿Cuanto pagas, aproximadamente, por cada una de las prestaciones que has contratado? " :$('#Question9').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"10",
                   "answerds":[  
                      {  
                         "Seguro de Gastos Medicos Mayores":"Muy Importante"
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"11",
                   "answerds":[  
                      {  
                         "Seguro de Gastos Medicos Mayores":"Muy Importante"
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"12",
                   "answerds":[  
                      {  
                         "Seguro de Gastos Medicos Mayores":"Muy Importante"
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"13",
                   "answerds":[  
                      {  
                         "Seguro de Gastos Medicos Mayores":"Muy Importante"
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"14",
                   "answerds":[  
                      {  
                         "Seguro de Gastos Medicos Mayores":"Muy Importante"
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"15",
                   "answerds":[  
                      {  
                         "Seguro de Gastos Medicos Mayores":"Muy Importante"
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"16",
                   "answerds":[  
                      {  
                         "Seguro de Gastos Medicos Mayores":"Muy Importante"
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"17",
                   "answerds":[  
                      {  
                         "Seguro de Gastos Medicos Mayores":"Muy Importante"
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"18",
                   "answerds":[  
                      {  
                         "Seguro de Gastos Medicos Mayores":"Muy Importante"
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"19",
                   "answerds":[  
                      {  
                         "Seguro de Gastos Medicos Mayores":"Muy Importante"
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"20",
                   "answerds":[  
                      {  
                         "Seguro de Gastos Medicos Mayores":"Muy Importante"
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"21",
                   "answerds":[  
                      {  
                         "Seguro de Gastos Medicos Mayores":"Muy Importante"
                      }
                   ]
                },
                              {  
                   "questionName":"importantBenefits",
                   "questionId":"22",
                   "answerds":[  
                      {  
                         "Seguro de Gastos Medicos Mayores":"Muy Importante"
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"23",
                   "answerds":[  
                      {  
                         "Seguro de Gastos Medicos Mayores":"Muy Importante"
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"24",
                   "answerds":[  
                      {  
                         "Seguro de Gastos Medicos Mayores":"Muy Importante"
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