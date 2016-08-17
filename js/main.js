var mainPage = $(".main-page-content");
var statisticPage = $(".static-page-content");
var menus = $('#menu-hrefs li a');
/*switch	()*/
var url = window.location.hash;
var hash = url.substring(url.indexOf('#')+1); // '#foo'
showContent(hash);

menus.each(function(i){
	if (hash == menus.eq(i).attr('data-content')) {
		menus.attr('class', '');
		menus.eq(i).attr('class', 'current');
	}
})
menus.on('click', function(e){
	menus.attr('class', '');
	$(e.target).attr('class', 'current');
	showContent($(e.target).attr('data-content'));
});

function showContent(content){
	switch(content){
		case 'main-page-content':
		mainPage.css('display', 'block');
		statisticPage.css('display', 'none');
		$('body').css('background-image', '');
		break;

		case 'statistics':
		mainPage.css('display', 'none');
		statisticPage.css('display', 'block');
		$('body').css('background-image', 'url(images/head3.png)');
		break;

		default:
		mainPage.css('display', 'block');
		statisticPage.css('display', 'none');
		$('body').css('background-image', '');
		break;

	}
}