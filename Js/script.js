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
function cambiarimagena(){
    document.getElementById('1').src='./Imágenes/cardrojofuego.jpg'
    document.getElementById('titulo').innerHTML='<i>Pokémon Rojo y Pokémon Azul</i>'
    document.getElementById('texto').innerHTML='Pokémon Rojo y Pokémon Azul (Pokémon Red y Pokémon Blue en inglés, ポケットモンスター 赤 Pocket Monsters Aka y ポケットモンスター 緑 Pocket Monsters Ao en japonés) son los dos primeros juegos de Pokémon que fueron lanzados al mercado occidental para la consola portátil Game Boy y posteriormente el 27 de febrero de 2016 se estrenó en la eShop de Nintendo 3DS. También llamados "Pokémon Edición Roja" y "Pokémon Edición Azul", son fieles traducciones al castellano de las versiones norteamericanas "Pokémon Red Version" y "Pokémon Blue Version". Estos juegos utilizan el motor y los gráficos del juego japonés Pokémon Azul, aunque la disponibilidad de Pokémon se corresponde con las ediciones japonesas Pokémon Rojo y Pokémon Verde (los primeros dos juegos Pokémon).'
}
function cambiarimagenb(){
    document.getElementById('1').src='./Imágenes/cardamarillo.png'
    document.getElementById('titulo').innerHTML='<i>Pokémon Amarillo</i>'
    document.getElementById('texto').innerHTML='Pokémon Amarillo (Pokémon Yellow en inglés, ポケットモンスター ピカチュウ Pocket Monsters Pikachu en japonés) es el cuarto juego de la primera generación tras Pokémon Verde y Pokémon Rojo y Azul. También llamado "Pokémon Edición Amarilla" o "Pokémon Edición Especial Pikachu", la principal diferencia respecto a los títulos anteriores es que está basado en la historia del anime, pero los objetivos y modo de juego son los mismos que en sus predecesores.'
}
function cambiarimagenc(){
    document.getElementById('1').src='./Imágenes/cardoro.jpg'
    document.getElementById('titulo').innerHTML='<i>Pokémon Oro, Pokémon Plata y Pokémon Cristal </i>'
    document.getElementById('texto').innerHTML='Pokémon Oro, Pokémon Plata y Pokémon Cristal (Pokémon Gold, Pokémon Silver y Pokémon Crystal en inglés, ポケットモンスター 金 Pocket Monsters Kin, ポケットモンスターム 銀 Pocket Monsters Gin y ポケットモンスターム クリスタル Pocket Monsters Crystal en japonés) son los juegos RPG de Pokémon para consola portátil pertenecientes a la segunda generación. También llamados "Pokémon Edición Oro", "Pokémon Edición Plata" y "Pokémon Edición Cristal", con estos juegos se añadió un total de 100 Pokémon más a los anteriormente capturables, mediante la aparición de una nueva región (Johto). '
}
function cambiarimagend(){
    document.getElementById('1').src='./Imágenes/cardrojofuegoremas.png'
    document.getElementById('titulo').innerHTML='<i>Pokémon Rojo Fuego y Pokémon Verde Hoja </i>'
    document.getElementById('texto').innerHTML='Pokémon Rojo Fuego y Pokémon Verde Hoja (Pokémon FireRed y Pokémon LeafGreen en inglés, ポケットモンスター ファイアレッド Pocket Monsters FireRed y ポケットモンスター リーフグリーン Pocket Monsters LeafGreen en japonés) son las versiones reeditadas de los juegos originales Pokémon Rojo y Pokémon Verde (Rojo y Azul fuera de Japón), con las novedades de los juegos para Game Boy Advance de Pokémon Rubí, Pokémon Zafiro y Pokémon Esmeralda. También llamados "Pokémon Edición Rojo Fuego" y "Pokémon Edición Verde Hoja", ambas ediciones fueron lanzadas a las tiendas europeas el 1 de Octubre de 2004. Aunque estas ediciones sean los remakes de Pokémon Rojo y Pokémon Verde, se consideran de la tercera generación, incluían además un conector inalámbrico.'
}
function cambiarimagene(){
    document.getElementById('1').src='./Imágenes/cardheartgold.jpg'
    document.getElementById('titulo').innerHTML='<i>Pokémon Oro HeartGold y Pokémon Plata SoulSilver</i>'
    document.getElementById('texto').innerHTML='También llamados "Pokémon Edición Oro HeartGold" y "Pokémon Edición Plata SoulSilver", repasan la historia de la región de Johto de igual forma que el primer remake repasa la historia de Kanto. Aunque hay varios cambios en el argumento del juego, este sigue casi la misma historia que en las primeras versiones, Oro y Plata. Además se incluyen varias cosas que fueron exclusivas de la edición Cristal, como es la introducción de la historia de Eusine y Suicune. En estos nuevos juegos hay una nueva protagonista femenina: Lira, sustituyendo a Cris. Esta, si no es elegida como protagonista por el jugador, continuará haciendo el mismo papel de amigo que ya hiciera Maya en Diamante, Perla y Platino. El rival, al igual que en las anteriores versiones, seguirá siendo ese chico misterioso que está enfrente del laboratorio del profesor Elm al principio del juego.'
}
function cambiarimagenf(){
    document.getElementById('1').src='./Imágenes/cardletsgo.png'
    document.getElementById('titulo').innerHTML='<i>Pokémon: Let´s Go, Pikachu! y Pokémon Let´s Go, Eevee!</i>'
    document.getElementById('texto').innerHTML='Pokémon: Let´s Go, Pikachu! y Pokémon: Let´s Go, Eevee! son dos videojuegos de rol de acción de la franquicia Pokémon, desarrollados por Game Freak y publicados por The Pokémon Company y Nintendo para la consola Nintendo Switch. Pertenecientes a la séptima generación y siendo las primeras entregas de la saga principal para esta plataforma, se trata de remakes mejorados del título de 1998 Pokémon Amarillo (asimismo un remake de Pokémon Rojo y Azul), cuarto título de la primera generación. Su fecha de estreno fue el 16 de noviembre de 2018.'
}


