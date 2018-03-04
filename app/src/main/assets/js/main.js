$(document).on('pagecreate', "[data-role='page']", function() {
	var currentSlide = "#"+$(this).attr("id");
	var idCurrentSlide = $(this).jqmData("id");
	var next = "#"+$(this).jqmData("next");
	var prev = "#"+$(this).jqmData("prev");
	
	/* Background slide */
	$(this).css("background-image" , "url(images/"+idCurrentSlide+".jpg)");
	
	/* Event slide */
	$(document).on('swiperight', currentSlide, function(){
		if(prev!="#") {
			$.mobile.changePage(prev, {reverse:true, transition:"slide"})
		}
	});
	
	$(document).on('swipeleft', currentSlide, function(){
		if(next!="#") {
			$.mobile.changePage(next, {transition:"slide"})
		}
	});

	/*var video5 = document.getElementById('video5');
	$(document).on("click","#play-5",function(){
		$('#video5').fadeIn();
	    video5.play();
	});

	video5.onended = function(){
		$('#video5').fadeOut();
	};*/
});