//
var app = angular.module('BetterBoss',[])

app.constant('API','http://52.33.161.165:9001')

app.controller('MainCtrl', function($scope, $rootScope){

})

app.controller('GetSendCtrl',function(API ,$scope, $http, $rootScope){
	$scope.LastQuestion = false;
  $scope.IsLast = function(){
    if ($(this).parent().find('.LabelAndCheck input').attr('name') == '35') {
      console.log('Test123');
    }
  }
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
    var EigthQuestionMulti = [];
    var checkboxesEight = document.getElementsByName('checkbox8');
    for (var i=0, n=checkboxesEight.length;i<n;i++) {
      if (checkboxesEight[i].checked) {
        checkboxesEight.push(checkboxesEight[i].value);
      }
    }
    //
    var ElevenQuestionMulti = [];
    var checkboxesEleven = document.getElementsByName('checkbox11');
    for (var i=0, n=checkboxesEleven.length;i<n;i++) {
      if (checkboxesEleven[i].checked) {
        ElevenQuestionMulti.push(checkboxesEleven[i].value);
      }
    }
    var TSixQuestionMulti = [];
    var checkboxesTSix = document.getElementsByName('checkbox26');
    for (var i=0, n=checkboxesTSix.length;i<n;i++) {
      if (checkboxesTSix[i].checked) {
        TSixQuestionMulti.push(checkboxesTSix[i].value);
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
                         "¿Que Prestaciones has contratado por tu cuenta? Elige todas las que apliquen?": EigthQuestionMulti
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"9",
                   "answerds":[  
                      {  
                         "¿Cuanto pagas, aproximadamente, por cada una de las prestaciones que has contratado? " : $('#Question9').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"10",
                   "answerds":[  
                      {  
                         "De las prestaciones que contrataste, en general ¿Qué tan satisfech@ estás?" :  $('#Question10').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"11",
                   "answerds":[  
                      {  
                         "¿Cuanto pagas, aproximadamente, por cada una de las prestaciones que has contratado? " : ElevenQuestionMulti
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"12",
                   "answerds":[  
                      {  
                         "¿QUÉ prestaciones, ademas de las que ya tienes o has contratado, TE GUSTARÍA TENER? " :$('#Question12').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"13",
                   "answerds":[  
                      {  
                         "Por qué no has contratado cada una de los siguientes servicios? Indica la razón más importante para cada uno":$('#Question13').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"14",
                   "answerds":[  
                      {  
                         "Cuanto estarías dispuesto a pagar, aproximadamente, por cada una de esas prestaciones?":$('#Question14').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"15",
                   "answerds":[  
                      {  
                         "Idealmente, ¿que porcentaje de tu ingreso total consideras adecuado destinar a recibir las prestaciones que quieres?":$('#Question15').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"16",
                   "answerds":[  
                      {  
                         "Estás dado de alta en el IMSS?":$('#Question16').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"17",
                   "answerds":[  
                      {  
                         "Por que motivo no te has dado de alta en el IMSS? Elige la razón más importante" : $('#Question17').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"18",
                   "answerds":[  
                      {  
                         "Cuanto estarías dispuesto a pagar por este servicio?":$('#Question18').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"19",
                   "answerds":[  
                      {  
                         "Que tan importantes son para ti cada una de las siguientes prestaciones:":$('#Question19').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"100",
                   "answerds":[  
                      {  
                         "¿Edad?" : $('#Question100').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"101",
                   "answerds":[  
                      {  
                         "¿sexo?":$('#Question101').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                              {  
                   "questionName":"importantBenefits",
                   "questionId":"102",
                   "answerds":[  
                      {  
                         "¿estado civil?":$('#Question102').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"103",
                   "answerds":[  
                      {  
                         "hijos?":$('#Question103').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"104",
                   "answerds":[  
                      {  
                         "¿Cuál es tu rango de ingreso mensual?":$('#Question104').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"25",
                   "answerds":[  
                      {  
                         "¿Cuántos empleados trabajan en tu empresa?": $('#Question25').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"26",
                   "answerds":[  
                      {  
                         "Tienes empleados en sistema de remuneración mixta? (remuneración mixta es el esquema de pago con bonos de productividad, participaciones de utilidad, apoyos o vales de despensa y otros conceptos que usualmente son integrados al salario del empleado)": TSixQuestionMulti
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"27",
                   "answerds":[  
                      {  
                         "¿CUÁNTO ESTARÍAS DISPUESTO A PAGAR POR ESTE SERVICIO?": $('#Question27').find('input[type="number"]').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"28",
                   "answerds":[  
                      {  
                         "¿Qué tan de acuerdo estas con las siguientes afirmaciones?": $('#Question28').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"29",
                   "answerds":[  
                      {  
                         "Que tan de acuerdo estas con las siguientes afirmaciones": $('#Question29').find('input[type="radio"]:checked').val()
                      }
                   ]
                },
                {  
                   "questionName":"importantBenefits",
                   "questionId":"34",
                   "answerds":[  
                      {  
                         "Seguro de Gastos Medicos Mayores": $('#Question34').find('input[type="radio"]:checked').val()
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