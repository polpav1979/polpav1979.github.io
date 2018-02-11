//Скрытый блок (спойлер)
$('.show').click(function () {
        $(this).toggleClass('active').next()[$(this).next().is(':hidden') ? "slideDown" : "slideUp"]();
    });