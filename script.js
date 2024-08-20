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
