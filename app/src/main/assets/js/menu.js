$(document).ready(function() {
	/* Links thumbnails */
	$("[data-role='page']").each(function() {
		$("#thumbnails ul").append("<li><a href='#"+$(this).attr("id")+"'><img src='images/thumbnails/"+$(this).jqmData("id")+".jpg' alt='#"+$(this).attr("id")+"'></a></li>");
	});
	
	/* Toggle menu */
	$("#toggle-menu, #header-menu, #btns-filtres, #thumbnails ul li a").on('click', function(){
		$("#menu").slideToggle();
	});
	
	updateActiveThumbnails();
	
	$(document).on('pageshow', "[data-role='page']", function() {
		var currentSlide = "#"+$(this).attr("id");

		$("#thumbnails a").removeClass("active");
		$("#thumbnails a[href="+currentSlide+"]").addClass("active");
	});
});

function thumbnails() {
	$("#thumbnails ul").empty();
	var filtre = arguments;
	
	for(var i=0; i<filtre.length-1; i++) {
		$("[data-role='page']").each(function() {
			if($(this).jqmData("chapitre") == filtre[i]) {
				$("#thumbnails ul").append("<li><a href='#"+$(this).attr("id")+"'><img src='images/thumbnails/"+$(this).jqmData("id")+".jpg' alt='#"+$(this).attr("id")+"'></a></li>");
			}
		});
	}
	
	if(filtre.length <= 1) {
		$("[data-role='page']").each(function() {
			$("#thumbnails ul").append("<li><a href='#"+$(this).attr("id")+"'><img src='images/thumbnails/"+$(this).jqmData("id")+".jpg' alt='#"+$(this).attr("id")+"'></a></li>");
		});
	}
	
	$("#thumbnails").scrollTop(0);
	
	$("#btns-filtres ul li a").removeClass('filtre-active');
	$("#"+filtre[filtre.length-1]).addClass('filtre-active');
	$("#menu").slideToggle();
	
	/* Toggle menu */
	$("#thumbnails ul li a").on('click', function(){
		$("#menu").slideToggle();
	});
	
	updateActiveThumbnails();
}

function updateActiveThumbnails() {
	var anchor = location.hash
	if(anchor == "") {
		anchor = "#slide-1"
	}
	$("#thumbnails a[href="+anchor+"]").addClass("active");
}