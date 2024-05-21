function alternarVisibilidadContrasena() {
    var campoContrasena = document.getElementById('contrasena');
    var toggleContrasena = document.querySelector('.toggle-password');
    if (campoContrasena.type === 'password') {
        campoContrasena.type = 'text';
        toggleContrasena.textContent = '🙈';
    } else {
        campoContrasena.type = 'password';
        toggleContrasena.textContent = '👁️';
    }
}

function crearEstrellas() {
    const contenedorEstrellas = document.querySelector('.estrellas');
    const numEstrellas = 20;

    for (let i = 0; i < numEstrellas; i++) {
        const estrella = document.createElement('div');
        estrella.classList.add('estrella');
        
        // Establecer tamaño, posición y retraso de animación aleatorios
        const tamano = Math.random() * 3 + 2 + 'px';
        const top = Math.random() * 100 + '%';
        const left = Math.random() * 100 + '%';
        const retraso = Math.random() * 2 + 's';
        const duracion = Math.random() * 2 + 2 + 's';
        
        estrella.style.width = tamano;
        estrella.style.height = tamano;
        estrella.style.top = top;
        estrella.style.left = left;
        estrella.style.animationDelay = retraso;
        estrella.style.animationDuration = duracion;

        contenedorEstrellas.appendChild(estrella);
    }
}

document.addEventListener('DOMContentLoaded', crearEstrellas);
