$(function(){
	$('a').mouseenter(function(e){
		var img = '.'+e.target.id;
		$('img').hide();
		$(img).show();
	});
	
	$('#list').mouseout(function(e){
		$('img').hide();
		$('.default').show();
	});
});