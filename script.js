document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.slide-in-left, .slide-in-right, .zoom-in, .fade-in-up');

    const observerOptions = {
        root: null, // Observa o viewport
        rootMargin: '0px',
        threshold: 0.2 // A seção se torna ativa quando 20% dela está visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Para que a animação ocorra apenas uma vez
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
