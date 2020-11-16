window.addEventListener('load', function() {
    console.log('estoy funcionando');

    var imagenes = [];

    imagenes[0] = 'Imágenes/cardrojofuego.jpg'
    imagenes[1] = 'Imágenes/cardamarillo.png'
    imagenes[2] = 'Imágenes/cardoro.jpg'
    imagenes[3] = 'Imágenes/cardrojofuegoremas.png'
    imagenes[4] = 'Imágenes/cardheartgold.jpg'
    imagenes[5] = 'Imágenes/cardletsgo.png'
    document.slider.src = imagenes[0];
    
    var indiceImagenes = 0;

    var tiempo = 1000;

    function cambiarimagenes() {

        document.slider.src = imagenes[indiceImagenes];

        if (indiceImagenes < 5 ) {
            indiceImagenes++;
        } else{
            indiceImagenes = 0;
        }    
        

    }

    setInterval(cambiarimagenes, tiempo);


});

