// JavaScript para mostrar/ocultar o menu em dispositivos móveis

const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", function () {
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
});

// Detectar tamanho da tela e ocultar/mostrar o botão de menu conforme necessário
function checkWindowSize() {
    if (window.innerWidth <= 768) { // Adapte este valor conforme necessário
        menuButton.style.display = "block";
    } else {
        menuButton.style.display = "none";
        mobileMenu.style.display = "none";
    }
}

window.addEventListener("resize", checkWindowSize);
checkWindowSize();