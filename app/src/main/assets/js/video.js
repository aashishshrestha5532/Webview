
var video1 = document.getElementById('video1');
var video2 = document.getElementById('video2');
$(document).on("pageshow","#slide-35",function(){ // When entering pagetwo
  	
    video1.play();
  	//$("#video1").trigger("play");
});

$(document).on("pagehide","#slide-35",function(){ // When entering pagetwo
  	video1.pause();
  /*$("#video1").trigger("pause");*/
  $("#video1").get(0).currentTime = 0;
});

$(document).on("pageshow","#slide-66",function(){ // When entering pagetwo

   video2.play();
  //$("#video2").trigger("play");
});

$(document).on("pagehide","#slide-66",function(){ // When entering pagetwo
  video2.pause();
  /*$("#video1").trigger("pause");*/
  $("#video2").get(0).currentTime = 0;
});