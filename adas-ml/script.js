document.addEventListener('DOMContentLoaded', () => {

    const slides = document.querySelectorAll('.slide');
    const navLinks = document.querySelectorAll('#menu ul li a');

    // Opções para o Intersection Observer
    // O callback será acionado quando 51% do slide estiver visível
    const observerOptions = {
        root: null, // Observa em relação à viewport
        rootMargin: '0px',
        threshold: 0.51 
    };

    // Callback que será executado quando a visibilidade de um slide mudar
    const slideObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Se o slide está intersectando a viewport (está visível)
            if (entry.isIntersecting) {
                const visibleSlideId = entry.target.id;

                // Remove a classe 'active' de todos os links do menu
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Adiciona a classe 'active' ao link do menu correspondente ao slide visível
                const activeLink = document.querySelector(`#menu a[href="#${visibleSlideId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };

    // Cria uma nova instância do Intersection Observer
    const observer = new IntersectionObserver(slideObserverCallback, observerOptions);

    // Diz ao observer para observar cada um dos slides
    slides.forEach(slide => {
        observer.observe(slide);
    });

});