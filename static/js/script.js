document.addEventListener("DOMContentLoaded", function () {
    const formularioAcceso = document.getElementById("loginForm");
    const campoFormulario = document.getElementById("emailInput");

    if (formularioAcceso) {
        formularioAcceso.addEventListener("submit", function (event) {
            event.preventDefault();

            const correo = campoFormulario.value.trim();

            if (correo !== "") {
                alert("¡Bienvenido/a! Has ingresado con el correo: " + correo);

                campoFormulario.value = "";
            }
        });
    }

    const botonesAdicionales = document.querySelectorAll(".boton-adicional");
    const contadorLibros = document.querySelector(".contador-libros");

    if (contadorLibros && botonesAdicionales.length > 0) {
        let contador = 0;

        botonesAdicionales.forEach(function (boton) {
            boton.addEventListener("click", function (event) {
                event.preventDefault();
                contador++;
                contadorLibros.textContent = contador;
            });
        });
    }

    const videoDestacado = document.getElementById("videoContainer");
    const video = document.getElementById("miVideo");

    if (videoDestacado && video) {
        videoDestacado.addEventListener("mouseenter", function () {
            videoDestacado.classList.add("active");
            video.pause();
        });

        videoDestacado.addEventListener("mouseleave", function () {
            videoDestacado.classList.remove("active");
            video.play();
        });
    }
});