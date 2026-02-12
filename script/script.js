// Efeito do Menu ao Rolar
window.addEventListener("scroll", function() {
	const nav = document.getElementById("main-nav");
	if (window.scrollY > 50) {
		nav.classList.add("sticky");
	} else {
		nav.classList.remove("sticky");
	}
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');
    const navLinks = document.querySelectorAll('.nav-link');

    // Fecha o menu ao clicar em um link (para mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });
});
