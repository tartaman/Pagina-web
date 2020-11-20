function charmander(){
    document.getElementById('escogiste').innerHTML = '¡Haz escogido a Charmander!, Busca estos pokémones, y ,¡con este equipo la tendrás más fácil!'
var a = document.getElementById('charmander');

    if (a.style.display === "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
}