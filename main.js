$(document).ready(function() {

    // Click per andare avanti
    $('.next i').click(function() {
        // creo una varibile per salvare l'immagine corrente
        var img_corrente = $('img.active');
        // creo una varibile per salvare l'icona corrente
        var icona_corrente = $('span.active');


        img_corrente.removeClass('active');
        icona_corrente.removeClass('active');

        // verifico se esiste un'immagine successiva
        if(img_corrente.next('img').length) {
            img_corrente.next('img').addClass('active');
            icona_corrente.next('span').addClass('active');
        } else {
            $('.painting img:first-child').addClass('active');
            $('.bullets span:first-child').addClass('active');
        }
    });

    // Click per andare indietro
    $('.prev i').click(function() {
        // creo una varibile per salvare l'immagine corrente
        var img_corrente = $('img.active');
        // creo una varibile per salvare l'icona corrente
        var icona_corrente = $('span.active');

        img_corrente.removeClass('active');
        icona_corrente.removeClass('active');

        // verifico se esiste un'immagine precedente
        if(img_corrente.prev('img').length) {
            img_corrente.prev('img').addClass('active');
            icona_corrente.prev('span').addClass('active');
        } else {
            $('.painting img:last-of-type').addClass('active');
            $('.bullets span:last-child').addClass('active');
        }
    });

    // intercetto il click su un pallino
    $('.bullets span').click(function() {
    // recupero il pallino corrente
    var pallino_corrente = $('span.active');
    // tolgo la classe active al pallino corrente
    pallino_corrente.removeClass('active');
    // aggiungo la classe active al pallino su cui l'utente ha cliccato
    $(this).addClass('active');


    // recupero l'immagine corrente
    var img_corrente = $('img.active');
    // tolgo la classe active all'immagine corrente
    img_corrente.removeClass('active');
    // recupero il numero del pallino su cui l'utente ha cliccato
    var indice_pallino = $(this).index();
    // recupero l'immagine corrispondente allo stesso numero
    var nuova_img = $('.painting img').eq(indice_pallino);
    // assegno la classe active alla nuova immagine
    nuova_img.addClass('active');
    });

});
