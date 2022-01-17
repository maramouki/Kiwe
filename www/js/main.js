$(".main-carousel").flickity({
	cellAlign: "center",
	contain: true,
	initialIndex: 1,
	wrapAround: true,
});
$(".carousel").flickity({
	cellAlign: "center",
	contain: true,
	wrapAround: true,
	autoPlay: 3500,
	imagesLoaded: true,
});
$(".carous").flickity({
	cellAlign: "center",
	contain: true,
	pageDots: false,
	autoPlay: 3500,
	imagesLoaded: true,
});
//scroll & loader
document.body.classList.add("scroll");

$(window).on("load", function () {
	$(".loader").fadeOut("slow");
	document.body.classList.remove("scroll");
	document.getElementById("myVideo").currentTime = 0;
});
