function aparecelorelei() {
    document.getElementById('1').src='./Imágenes/Laprasgif.gif'
    document.getElementById('lider').innerHTML = '<h1 class="lorelei2">Lorelei</h1>'
    document.getElementById('tipo').innerHTML = '<p class="tipo" style="background-color: #58C8E0;">Hielo</p>'
    document.getElementById('lidertexto').innerHTML = '<p class="textoqueaparece">¡Bienvenido a la LIGA POKéMON!¡Yo soy LORELEI del ALTO MANDO!¡¡Nadie me supera con los pokémon que congelan!!¡Los movimientos congelantes son muy potentes!¡Tus POkéMON estarán a mi merced cuando los congele!¡Ja! ¡Ja! ¡Ja! ¿Estás listo?'
    document.getElementById('tipo1').innerHTML = 'Hielo'
    document.getElementById('tipo2').innerHTML = 'Agua'
    document.getElementById('tipo1').classList = 'tipo1 hielo'
    document.getElementById('tipo2').classList = 'tipo2 agua'
    document.getElementById('inf').innerHTML = 'Lapras <br> Nivel: 50 <br> Objeto: Ninguno <br> Habilidad:Ninguna'

    var b = document.getElementById('aparecepkmas');

    if (b.style.display === "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }

    var c = document.getElementById('aparece')
    if (c.style.display === "none") {
        c.style.display = "block";
    } else {
        c.style.display = "none"
    }
    var d = document.getElementsByClassName('tipospokeasliga')

    if (d.style.display === "none") {
        d.style.display = "block"

    } else {
        d.style.display = "none"
    }
}

function aparecebruno() {
    document.getElementById('inf').innerHTML = 'Machamp <br> Nivel: 58 <br> Objeto: Ninguno <br> Habilidad:Ninguna'
    document.getElementById('1').src='./Imágenes/Machampgif.gif'
    document.getElementById('lider').innerHTML = '<h1 class="bruno2">BRUNO</h1>'
    document.getElementById('tipo').innerHTML = '<p class="tipo" style="background-color: #A05038;">Lucha</p>'
    document.getElementById('lidertexto').innerHTML = '¡Yo soy BRUNO del ALTO MANDO!¡Con un riguroso entrenamiento, la gente y los POKéMON pueden fortalecerse!¡Yo he entrenado a mis POKéMON con pesas!¡Os machacaremos con nuestra gran fuerza!'
    document.getElementById('tipo1').innerHTML = 'Lucha'
    document.getElementById('tipo2').innerHTML = 'Roca'
    document.getElementById('tipo1').classList = 'tipo1 lucha'
    document.getElementById('tipo2').classList = 'tipo2 roca'
    var b = document.getElementById('aparecepkmas');

    if (b.style.display === "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }

    var c = document.getElementById('aparece')
    if (c.style.display === "none") {
        c.style.display = "block";
    } else {
        c.style.display = "none"
    }
    var d = document.getElementsByClassName('tipospokeasliga')

    if (d.style.display === "none") {
        d.style.display = "block"

    } else {
        d.style.display = "none"
    }
}

function apareceagatha() {
    document.getElementById('inf').innerHTML = 'Gengar <br> Nivel: 60 <br> Objeto: Ninguno <br> Habilidad:Ninguna'
    document.getElementById('1').src='./Imágenes/Gengargif.gif'
    document.getElementById('lider').innerHTML = '<h1 class="agatha2">Agatha</h1>'
    document.getElementById('tipo').innerHTML = '<p class="tipo" style="background-color: #6060B0;">Fantasma</p>'
    document.getElementById('lidertexto').innerHTML = '¡Yo soy AGATHA del ALTO MANDO!¡El PROF. OAK parece estar muy interesado en ti!¡Hace tiempo ese viejo inútil era fuerte y apuesto! ¡Pero eso fue hace décadas!¡Ahora sólo juguetea con su POKéDEX! ¡Pero está equivocado! ¡Los POKéMON son para luchar!¡Yo te enseñaré cómo lucha un gran entrenador!'
    document.getElementById('tipo1').innerHTML = 'Veneno'
    document.getElementById('tipo2').innerHTML = 'Fantasma'
    document.getElementById('tipo1').classList = 'tipo1 veneno'
    document.getElementById('tipo2').classList = 'tipo2 fantasma'
    var b = document.getElementById('aparecepkmas');

    if (b.style.display === "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }

    var c = document.getElementById('aparece')
    if (c.style.display === "none") {
        c.style.display = "block";
    } else {
        c.style.display = "none"
    }
    var d = document.getElementsByClassName('tipospokeasliga')

    if (d.style.display === "none") {
        d.style.display = "block"

    } else {
        d.style.display = "none"
    }
}

function aparecelance() {
    document.getElementById('inf').innerHTML = 'Dragonite <br> Nivel: 62 <br> Objeto: Ninguno <br> Habilidad:Ninguna'
    document.getElementById('1').src='./Imágenes/Dragonitegif.gif'
    document.getElementById('lider').innerHTML = '<h1 class="lance2">Lance</h1>'
    document.getElementById('tipo').innerHTML = '<p class="tipo" style="background-color: #7038F8;">Dragón</p>'
    document.getElementById('lidertexto').innerHTML = '¡Ah! ¡He oído hablar de ti!¡Dirijo al ALTO MANDO! ¡Puedes llamarme LANCE, el entrenador de dragones!¡Los dragones son míticos POKéMON!¡Son difíciles de capturar y entrenar pero sus poderes son muy superiores!¡Son casi invencibles!Bien, ¿preparado para perder?¡Tu desafío en la LIGA termina conmigo!'
    document.getElementById('tipo1').innerHTML = 'Dragón'
    document.getElementById('tipo2').innerHTML = 'Volador'
    document.getElementById('tipo1').classList = 'tipo1 dragón'
    document.getElementById('tipo2').classList = 'tipo2 volador'
    var b = document.getElementById('aparecepkmas');

    if (b.style.display === "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }

    var c = document.getElementById('aparece')
    if (c.style.display === "none") {
        c.style.display = "block";
    } else {
        c.style.display = "none"
    }
    var d = document.getElementsByClassName('tipospokeasligalance')

    if (d.style.display === "none") {
        d.style.display = "block"

    } else {
        d.style.display = "none"
    }




}