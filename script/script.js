// Efeito do Menu ao Rolar
window.addEventListener("scroll", function() {
	const nav = document.getElementById("main-nav");
	if (window.scrollY > 50) {
		nav.classList.add("sticky");
	} else {
		nav.classList.remove("sticky");
	}
});