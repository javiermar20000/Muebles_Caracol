const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");

btnAbrirModal.addEventListener("click", () => {
    modal.scrollTop = 0; // Establecer el desplazamiento al principio
    modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
    modal.close();
});

window.onscroll = function() {
    if(document.documentElement.scrollTop > 100) {
        document.querySelector(".go-top-container")
        .classList.add("show");
    } else {
        document.querySelector(".go-top-container")
        .classList.remove("show");
    }
}

document.querySelector(".go-top-container")
.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
