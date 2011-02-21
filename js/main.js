$(document).ready(function() {
	//hide all images in header
	$("#contentheader ul li").css({opacity: 0.0});	
	//show first image
	$("#contentheader ul li:first").css({opacity: 1.0});
	//start rotation of images
	setInterval('rotateImages()',6000);	
});



function rotateImages() {

	//get first image
	var current= ($("#contentheader ul li.show") ? $("#contentheader ul li.show"):$("#contentheader ul li:first"));

	//get next image, when it reaches end, rotate it back to the first image
	var next = ((current.next().length) ? ((current.next().hasClass("show")) ? $("#contentheader ul li:first") : current.next()) : $("#contentheader ul li:first"));

	//set the fade in effect for next image, the show class has highter z-index
	next.css({opacity: 0.0}).addClass("show").animate({opacity: 1.0},1000);

	//hide the current image
	current.animate({opacity: 0.0}, 1000).removeClass("show");
};

