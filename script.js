//select element
const selectElement = (element) => document.querySelector(element);

const body = selectElement('body');
const menuToggler = selectElement('.menu-toggle');

menuToggler.addEventListener('click', () => {
	body.classList.toggle('open');
});

// SCROLL REVEAL
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
	origin: 'left',
	duration: 1000,
	distance: '25rem',
	delay: 300
});

sr.reveal('.animate-right', {
	origin: 'right',
	duration: 1000,
	distance: '25rem',
	delay: 300
});

sr.reveal('.animate-top', {
	origin: 'top',
	duration: 1000,
	distance: '25rem',
	delay: 300
});

sr.reveal('.animate-bottom', {
	origin: 'bottom',
	duration: 1000,
	distance: '25rem',
	delay: 300
});
