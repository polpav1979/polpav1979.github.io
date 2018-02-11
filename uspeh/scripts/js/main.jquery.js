//плавный перехода к нужному блоку при якорной ссылке
$(document).ready(function () {
    $('.menu_header').on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
        //анимируем переход на расстояние - top за 500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

//выделение меню при наведении
$(document).ready(function ($) {
    $('.menu_right a[href]').on('click', function () {
        $(this).siblings().removeClass('act').end().addClass('act');
    });
});

//При скролинге менять цвет ссылки меню
var menu_selector = ".menu_right"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню. 
function onScroll(){
	var scroll_top = $(document).scrollTop();
	$(menu_selector + " a").each(function(){
		var hash = $(this).attr("href");
		var target = $(hash);
		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(menu_selector + " a.active").removeClass("active");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
}
$(document).ready(function () {
	$(document).on("scroll", onScroll);
	$("a[href^=#]").click(function(e){
		e.preventDefault();
		$(document).off("scroll");
		$(menu_selector + " a.active").removeClass("active");
		$(this).addClass("active");
		var hash = $(this).attr("href");
		var target = $(hash);
		$("html, body").animate({
		    scrollTop: target.offset().top
		}, 500, function(){
			window.location.hash = hash;
			$(document).on("scroll", onScroll);
		});
	});
});

//При скроллинге показать/скрыть логотип в меню
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 450) {
            $('.menu_logo').fadeIn();
        } else {
            $('.menu_logo_hidden').fadeOut();
        }
    });
});

 //Скрытый блок (спойлер)
$(document).ready(function () {
$('.price-button').click(function () {
 $(this).toggleClass('active').next()[$(this).next().is(':hidden') ? "slideDown" : "slideUp"]();
 });
});

var map;
    DG.then(function () {
        map = DG.map('map', {
            center: [104.335626, 52.27231],
            zoom: 16
        });
        DG.marker([54.98, 82.89]).addTo(map).bindPopup('Вы кликнули по мне!');
    });

(jQuery);

/*function getUrlVars(href) { //функция получения переменных адресной строки
 var vars = [], hash; //определяем ключи для будущего ассоциативного массива значений адресной строки
 var hashes = href.slice(href.indexOf("?") + 1).split("&"); //создаем массив строк с парами ключ=значение(Ex. page=law, var=value)
 for (var i = 0; i < hashes.length; i++) { //запускаем цикл для получения всех переменных адресной строки от i=0 до кол-ва пар в переменной hashes 
 hash = hashes[i].split("="); //разделяем очередную пару на 2 элемента ключ и значение (разделяются они знаком "=")
 vars.push(hash[0]); //заносим в массив vars методом push элемент hash в котором будет находится ключ
 vars[hash[0]] = hash[1]; //в массив vars по только что вытащенному ключу заносим значение этого ключа
 } //конец цикла
 return vars; // возвращаем массив из функции в присвоенную переменную
 }
 ;
 
 window.onload = function () {
 // проверяем поддерживает ли браузер FormData 
 if (!window.FormData) {
 // если не поддерживает, то выводим предупреждение вместо формы
 var div = ge('content');
 div.innerHTML = "Ваш браузер не поддерживает объект FormData";
 div.className = 'notSupport';
 }
 };
 
 $(document).ready(function () {
 var vars = getUrlVars(document.location.href);
 var $folder = vars["page"];
 $('ul.sidebar-button li').attr("style", "cursor: pointer;");
 $('li[data-ajaxhref] > a').on("click", function () {
 var $this = $(this);
 $folder = $(this).parent().parent().hasClass('articles') ? "articles" : $folder;
 $.ajax({
 url: "scripts/ajaxPages.php",
 type: "POST",
 data: {
 folder: $folder,
 file: $(this).parent().attr("data-ajaxhref")
 },
 success: function (data) {
 $('div.sidebar-main div.main').empty().append(data);
 $('li[data-ajaxhref].active').removeClass('active');
 $($this).parent().addClass('active');
 $($this).parent().parent().hasClass("sidebar-dropdown-content") ? null : $('ul#menu_body li.sidebar-dropdown div.opened').trigger("click");
 }
 });
 });
 var href = document.location.href; //присваиваем значение переменной
 $('ul.navibar-button li').each(function () {//применять функцию каждому li
 var href2 = $(this).find("a[href]").attr("href");
 if (~href.indexOf(href2)) {
 $(this).addClass("active");
 };
 });
 });
 
 //выпадающее меню
 $('ul#menu_body li.sidebar-dropdown div').click(function () {
 $(this).toggleClass('opened closed').parent().find('ul.sidebar-dropdown-content').slideToggle("fast");
 $('ul#menu_body li.sidebar-dropdown div.opened').not(this).toggleClass('opened closed').next().slideToggle("fast");
 });
 
 //Скрытый блок (спойлер)
 $('.show').click(function () {
 $(this).toggleClass('active').next()[$(this).next().is(':hidden') ? "slideDown" : "slideUp"]();
 });
 
 //модальное окно
 var inp = document.getElementsByClassName('lightbox1');
 for (var i = 0; i < inp.length; i++) {
 inp[i].onclick = function () {
 document.documentElement.style.overflow = (this.checked ? 'hidden' : 'auto');
 document.documentElement.style.marginRight = (this.checked ? '17px' : '');
 };
 }
 
 // контактная форма
 document.getElementById('feedback-form').addEventListener('submit', function (evt) {
 var http = new XMLHttpRequest(), f = this;
 evt.preventDefault();
 http.open("POST", "https://biz-for-me.ru/contacts.php", true);
 http.onreadystatechange = function () {
 if (http.readyState === 4 && http.status === 200) {
 alert(http.responseText);
 if (http.responseText.indexOf(f.nameFF.value) === 0) { // очистить поле сообщения, если в ответе первым словом будет имя отправителя
 f.messageFF.removeAttribute('value');
 f.messageFF.value = '';
 }
 }
 };
 http.onerror = function () {
 alert('Извините, данные не были переданы');
 };
 http.send(new FormData(f));
 }, false);
 (jQuery);*/

//показ одного дива и скрытие другого дива
/*$(function() {
	$('.price_button_main').on('click', function(e) {
		e.preventDefault();
		$('.price-text_item').each(function() {
			$(this).css('display', 'none');
		});
		var block = $(this).attr('href');
		$(block).css('display', 'flex').addClass('price-text_item_right');
	});
});*/