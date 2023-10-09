// Obtém referências aos elementos do DOM
const openPopup = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');
const imageModal = document.getElementById('imageModal');

// Abre o modal ao clicar no link
openPopup.addEventListener('click', () => {
	imageModal.style.display = 'block';
});

// Fecha o modal ao clicar no botão de fechar
closePopup.addEventListener('click', () => {
	imageModal.style.display = 'none';
});

// Fecha o modal se o usuário clicar fora da imagem
window.addEventListener('click', (event) => {
	if (event.target === imageModal) {
		imageModal.style.display = 'none';
	}
});
