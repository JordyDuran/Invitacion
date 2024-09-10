// Tu código actual
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in-on-scroll');

    function checkPosition() {
        const viewportHeight = window.innerHeight;
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < viewportHeight * 0.8) { // Ajusta el valor según necesites
                element.classList.add('fade-in');
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition(); // Verifica la posición al cargar la página
});

// Nuevo código para el texto con fade-in secuencial
document.addEventListener("DOMContentLoaded", function() {
    const lines = document.querySelectorAll(".line");
    
    lines.forEach(line => {
        setTimeout(() => {
            line.style.opacity = 1;
        }, line.getAttribute("data-delay") * 1000);
    });
});
