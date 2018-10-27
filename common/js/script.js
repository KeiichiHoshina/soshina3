/* JavaScript jQuery */
$(function(){

	// Page fadein
	var myPage = $('body');
	$(document).ready(function(){
		myPage.delay(100).fadeIn('slow');
	});

	// copyYear
	var copyYear = new Date();
	var footerYears = $('.copyright .copy-years');
	$(footerYears).text(copyYear.getFullYear());

	// pagetop
	var pagetop = $('.pagetop');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			pagetop.fadeIn();
		} else {
			pagetop.fadeOut();
		}
	});
	pagetop.click(function () {
		$('body, html').animate({ scrollTop: 0 }, 500);
		return false;
	});

});