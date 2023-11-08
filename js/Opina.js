const opinionForm = document.getElementById('opinionForm');
const nombreInput = document.getElementById('nombre');
const opinionInput = document.getElementById('opinion');
const opinionesList = document.getElementById('opiniones');

opinionForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = nombreInput.value;
    const opinion = opinionInput.value;

    if (nombre.trim() === '' || opinion.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Obtener las opiniones existentes o inicializar un arreglo vacío
    const opiniones = JSON.parse(localStorage.getItem('opiniones')) || [];

    // Agregar la nueva opinión al arreglo
    opiniones.push({ nombre, opinion });

    // Guardar el arreglo en localStorage
    localStorage.setItem('opiniones', JSON.stringify(opiniones));

    // Limpiar los campos del formulario
    nombreInput.value = '';
    opinionInput.value = '';

    // Mostrar las opiniones en la lista
    mostrarOpiniones();
});

function mostrarOpiniones() {
    opinionesList.innerHTML = '';
    const opiniones = JSON.parse(localStorage.getItem('opiniones')) || [];

    opiniones.forEach(opinion => {
        const li = document.createElement('li');
        li.textContent = `${opinion.nombre}: ${opinion.opinion}`;
        opinionesList.appendChild(li);
    });
}

// Mostrar las opiniones al cargar la página
mostrarOpiniones();