// Bad Practice
$('button').click(function(){
	if ($(this).parent().attr('data-multi') == 'false') {
		  var GetNextQuestion = $(this).parent().find('.LabelAndCheck input[type="radio"]:checked').attr('data-jumpTo');
		  $(this).parent().hide();
		  $('.BoxOfQuestion[data-question='+GetNextQuestion+']').fadeIn();
		  if ($(this).parent().attr('data-numbers') == "true") {
			  var GetNextQuestion = 28;
			  $(this).parent().hide();
			  $('.BoxOfQuestion[data-question='+GetNextQuestion+']').fadeIn();
		  }
	}else{
	  var GetNextQuestion = $(this).parent().find('.LabelAndCheck input[type="checkbox"]:checked').attr('data-jumpTo');
	  console.log(GetNextQuestion + ' Checkbox');
	  $(this).parent().hide();
	  $('.BoxOfQuestion[data-question='+GetNextQuestion+']').fadeIn(1000);
	}
});
