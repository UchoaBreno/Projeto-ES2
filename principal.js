function toggleMenu() {
    var menuItems = document.querySelector('.menu-items');
    var first = document.querySelector('.first');

    menuItems.classList.toggle('show');
    first.classList.toggle('hide');
}

// Adicione um ouvinte de evento para redimensionamento da janela
window.addEventListener('resize', function() {
    var first = document.querySelector('.first');
    var menuItems = document.querySelector('.menu-items');

    // Verificar se o menu de itens está sendo mostrado
    var isMenuShown = menuItems.classList.contains('show');

    // Se o menu estiver sendo mostrado e a tela for menor que 900px, ocultar o h1
    if (isMenuShown && window.innerWidth < 900) {
        first.classList.add('hide');
    } else {
        // Caso contrário, garantir que o h1 seja exibido
        first.classList.remove('hide');
    }
});

// JavaScript para controlar o movimento da seta
window.addEventListener('scroll', function() {
    var scrollLeft = window.scrollX; // Posição atual de rolagem horizontal da página
    var seta = document.querySelector('.seta');
    var newPosition = 430 - scrollLeft / 1.5; // Ajusta a posição do elemento conforme o usuário rola para a direita

    // Limita a posição mínima para que o elemento não se mova infinitamente para fora da tela
    newPosition = Math.max(newPosition, 50);

    // Aplica a nova posição ao elemento
    seta.style.left = newPosition + 'px';
});
