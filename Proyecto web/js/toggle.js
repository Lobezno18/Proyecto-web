// Obtener el checkbox y el body
const checkbox = document.getElementById('dark-mode-toggle'); // Seleccionar por ID
const body = document.body;

// Función para manejar el cambio de modo
function toggleDarkMode() {
    // Cambiar la clase del body
    body.classList.toggle('dark-mode');

    // Cambiar la clase de los elementos relevantes
    const header = document.querySelector('.cabezera');
    const contenidos = document.querySelectorAll('.contenido');
    const navegantes = document.querySelectorAll('.naveg');
    const plataformas = document.querySelectorAll('.plataform');

    header.classList.toggle('dark-mode');
    contenidos.forEach(contenido => contenido.classList.toggle('dark-mode'));
    navegantes.forEach(naveg => naveg.classList.toggle('dark-mode'));
    plataformas.forEach(plataform => plataform.classList.toggle('dark-mode'));
}

// Agregar evento al checkbox
checkbox.addEventListener('change', toggleDarkMode);