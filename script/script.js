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

window.addEventListener('scroll', function() {
    const nav = document.getElementById('main-nav'); // Seleciona sua navbar
    if (window.scrollY > 50) {
        nav.classList.add('navbar-scrolled', 'bg-light', 'shadow'); // Adiciona fundo claro e sombra
    } else {
        nav.classList.remove('navbar-scrolled', 'bg-light', 'shadow');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Verifica se o usuário já visitou nesta sessão
    if (!sessionStorage.getItem("visitado")) {
        const container = document.getElementById("contador-container");
        const imgContador = document.createElement("img");
        
        // Insere a URL do seu contador - https://www.contador-gratis.com
        imgContador.src = "https://contador-gratis.com/contadores-de-visitas/110226100307805.gif";
        imgContador.style.width = "40px";
        
        container.appendChild(imgContador);
        
        // Marca que o contador já foi carregado para este usuário
        sessionStorage.setItem("visitado", "true");
    } else {
        // Opcional: Mostrar uma mensagem ou imagem estática se já visitou
        document.getElementById("contador-container").innerText = "";
    }
});
