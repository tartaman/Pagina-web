var indexSlides = 1;
enseñarSlides(indexSlides);

function slideSiguiente(n) {
    enseñarSlides(indexSlides += n);
}

function slideActual(n) {
    enseñarSlides(indexSlides = n);
}

function enseñarSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slidediv");
    var circulos = document.getElementsByClassName("circulo");
    if (n > slides.length) {indexSlides = 1}
    if (n < 1 ){indexSlides = slides.length}
    for ( i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circulos.length; i++){
        circulos[i].className = circulos[i].className.replace("active", "");
<<<<<<< HEAD
    
    
    }
    slides[indexSlides-1].className = "block";
    circulos[indexSlides-1].className += " active";
=======
    }
slides[indexSlides-1].style.display = "block";
circulos[indexSlides-1].className += " active";
>>>>>>> parent of a2f980f... arreglé mi vista de mapa liga
}