let showMenu = false;

// Funcion que oculta o muestra el menu
function showHideMenu(){
    if(showMenu){
        document.getElementById("nav").classList = "";
        showMenu = "false"
    }else{
        document.getElementById("nav").classList = "responsive";
        showMenu = "true"
    }
}

function select(){
    // Ocultar el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    showMenu = false;
}

window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("below", window.scrollY>0)
})

// Animacion lottie

document.addEventListener("DOMContentLoaded", function () {
    // Configuración de la animación Lottie
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('lottie-container'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/5d8a2f82-2fee-4c32-a3ee-5ad6f5274c8e/np937tJdc6.json' // Reemplaza con la ruta correcta
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Configuración de la animación Lottie
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('lottie-container-2'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/7d9c2ade-12d6-4061-bd39-d185aac80e49/ef2jCD81Io.json' // Reemplaza con la ruta correcta
    });
});