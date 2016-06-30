// Bad Practice
$('button').click(function(){
	if ($(this).parent().attr('data-multi') == 'false') {
		  var GetNextQuestion = $(this).parent().find('.LabelAndCheck input[type="radio"]:checked').attr('data-jumpTo');
		  $('.BoxOfQuestion[data-question='+GetNextQuestion+']').fadeIn();
		  $(this).parent().fadeOut();
	}else{
	  var GetNextQuestion = $(this).parent().find('.LabelAndCheck input[type="checkbox"]:checked').attr('data-jumpTo');
	  console.log(GetNextQuestion + ' Checkbox');
	  $('.BoxOfQuestion[data-question='+GetNextQuestion+']').fadeIn();
	  $(this).parent().fadeOut();		
	}
});
