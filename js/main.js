var mainPage = $(".main-page-content");
var menus = $('#menu-hrefs li a');
a = menus;
/*switch	()*/
var url = window.location.hash;
var hash = url.substring(url.indexOf('#')+1); // '#foo'
showContent(hash);

menus.on('click', function(e){
	menus.attr('class', '');
	$(e.target).attr('class', 'current')
	showContent($(e.target).attr('data-content'));
});

function showContent(content){
	console.log(content)
	switch(content){
		case 'main-page-content':
		mainPage.css('display', 'block');
		$('body').css('background-image', '')
		break;

		case 'statistics':
		mainPage.css('display', 'none');
		$('body').css('background-image', 'url(images/head3.png)')
		break;
	}
}