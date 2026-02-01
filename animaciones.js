const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const intervalTime = 5000;

function showSlide(index) {
slides.forEach(slide => slide.classList.remove('active'));
slides[index].classList.add('active');
}

function nextSlide() {
currentSlide = (currentSlide + 1) % slides.length;
showSlide(currentSlide);
}

setInterval(nextSlide, intervalTime);

/**
 * Abre una ventana modal específica por su ID.
 * @param {string} modal1 - El ID del elemento modal.
 */
function openModal(modal1) {
    const modal = document.getElementById(modal1);
    if (modal) {
        modal.classList.add('active');
        // Desactiva el desplazamiento del cuerpo de la página
        document.body.style.overflow = 'hidden'; 
    }
}

/**
 * Cierra una ventana modal específica por su ID.
 * @param {string} modal2 - El ID del elemento modal.
 */
function closeModal(modal2) {
    const modal = document.getElementById(modal2);
    if (modal) {
        modal.classList.remove('active');
        // Reactiva el desplazamiento del cuerpo de la página
        document.body.style.overflow = 'auto'; 
    }
}

/**
 * Listener global para cerrar modales al hacer clic fuera del contenido.
 */
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};
