$(document).ready(function() {

    // Click per andare avanti
    $('.next i').click(function() {
        // creo una varibile per salvare l'immagine corrente
        var img_corrente = $('img.active');

        img_corrente.removeClass('active');

        // verifico se esiste un'immagine successiva
        if(img_corrente.next('img').length) {
            img_corrente.next('img').addClass('active');
        } else {
            $('.painting :first-child').addClass('active');
        }
    });

    // Click per andare indietro
    $('.prev i').click(function() {
        // creo una varibile per salvare l'immagine corrente
        var img_corrente = $('img.active');

        img_corrente.removeClass('active');

        // verifico se esiste un'immagine precedente
        if(img_corrente.prev('img').length) {
            img_corrente.prev('img').addClass('active');
        } else {
            $('.painting img:last-of-type').addClass('active');
        }
    });

});
