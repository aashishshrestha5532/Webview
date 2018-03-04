$(document).on('pagecreate', "[data-role='page']", function() {
	var currentSlide = "#"+$(this).attr("id");
	var idCurrentSlide = $(this).jqmData("id");
	var next = "#"+$(this).jqmData("next");
	var prev = "#"+$(this).jqmData("prev");
	
	/* Background slide */
	$(this).css("background-image" , "url(images/"+idCurrentSlide+".jpg)");
	
	/* Btn home */
	if((idCurrentSlide != 11)&&(idCurrentSlide != 16)&&(idCurrentSlide != 17)&&(idCurrentSlide != 20)&&(idCurrentSlide != 22)&&
		(idCurrentSlide != 23)&&(idCurrentSlide != 24)&&(idCurrentSlide != 25)&&(idCurrentSlide != 27)&&(idCurrentSlide != 28)&&
		(idCurrentSlide != 29)&&(idCurrentSlide != 30)&&(idCurrentSlide != 31)&&(idCurrentSlide != 32)&&(idCurrentSlide != 33)&&
		(idCurrentSlide != 35)&&(idCurrentSlide != 36)&&(idCurrentSlide != 55)) {
		$(currentSlide+" .ui-content").append('<a href="#slide-1" class="btn-home"></a>');
		$(currentSlide+" .ui-content").append('<a href="#slide-2" class="btn-caracteristics"></a>');
		$(currentSlide+" .ui-content").append('<a href="#slide-19" class="btn-clinical"></a>');
		$(currentSlide+" .ui-content").append('<a href="#slide-26" class="btn-practice"></a>');
		$(currentSlide+" .ui-content").append('<a href="#slide-39" class="btn-safety"></a>');
		$(currentSlide+" .ui-content").append('<a href="#slide-40" class="btn-case"></a>');
		$(currentSlide+" .ui-content").append('<a href="#slide-60" class="btn-resources"></a>');
		$(currentSlide+" .ui-content").append('<a href="#slide-67" class="btn-references"></a>');
	}

	if(((idCurrentSlide >= 2)&&(idCurrentSlide <= 18))||((idCurrentSlide=='7-1')||(idCurrentSlide=='7-2')||(idCurrentSlide=='7-3')||(idCurrentSlide=='7-4')||(idCurrentSlide=='7-5')||(idCurrentSlide=='7-6')||(idCurrentSlide=='7-7'))) {
		if((idCurrentSlide != 11)&&(idCurrentSlide != 16)&&(idCurrentSlide != 17)) {
			$(currentSlide+" .ui-content").append('<a href="#slide-2" class="sub-btn-mechanism"></a>');
			$(currentSlide+" .ui-content").append('<a href="#slide-7" class="sub-btn-guidelines"></a>');
			$(currentSlide+" .ui-content").append('<a href="#slide-9" class="sub-btn-definition"></a>');
			$(currentSlide+" .ui-content").append('<a href="#slide-10" class="sub-btn-multimeric"></a>');
			$(currentSlide+" .ui-content").append('<a href="#slide-12" class="sub-btn-thrombosis"></a>');
		}
	}

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
});