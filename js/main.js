$(function(){

	// simple smooth scrolling
    $(".scroll").click(function(){
        var href = $(this).attr("href");
        var target = $(href).offset().top;
		
        $("html,body").animate({
			scrollTop: target
		},1000);
    });
});
